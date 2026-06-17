import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import {
  Client,
  GatewayIntentBits,
  ChannelType,
  PermissionsBitField,
} from 'discord.js'

// ─── ENVIRONMENT VALIDATION ────────────────────────────────────────────────────

const REQUIRED_ENV = ['DISCORD_TOKEN', 'GUILD_ID']
const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key])
if (missingEnv.length > 0) {
  console.error(`[lobby-bot] ❌ Missing required environment variables: ${missingEnv.join(', ')}`)
  console.error('[lobby-bot]    Please check your lobby-bot/.env file and ensure all keys are set.')
  process.exit(1)
}

const PORT = parseInt(process.env.PORT || '3001', 10)
const GUILD_ID = process.env.GUILD_ID
const CATEGORY_ID = process.env.CATEGORY_ID || null
const DISCORD_TOKEN = process.env.DISCORD_TOKEN

// ─── DISCORD CLIENT ────────────────────────────────────────────────────────────

const discordClient = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
  ],
})

// Track bot readiness so we can gate API calls correctly
let botReady = false

discordClient.once('ready', (client) => {
  botReady = true
  console.log(`[lobby-bot] ✅ Discord bot online as: ${client.user.tag}`)
  console.log(`[lobby-bot] 🎯 Targeting guild ID: ${GUILD_ID}`)
  if (CATEGORY_ID) {
    console.log(`[lobby-bot] 📁 Voice channels will be created under category ID: ${CATEGORY_ID}`)
  } else {
    console.log('[lobby-bot] 📁 No CATEGORY_ID set — channels will be created at the top level.')
  }
})

discordClient.on('error', (err) => {
  console.error('[lobby-bot] Discord client error:', err)
})

discordClient.on('warn', (info) => {
  console.warn('[lobby-bot] Discord client warning:', info)
})

// ─── EXPRESS APP ───────────────────────────────────────────────────────────────

const app = express()

app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use(express.json({ limit: '64kb' }))

// Request logger
app.use((req, _res, next) => {
  const ts = new Date().toISOString()
  console.log(`[lobby-bot] ${ts} ${req.method} ${req.path}`)
  next()
})

// ─── HEALTH CHECK ──────────────────────────────────────────────────────────────

app.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    botReady,
    timestamp: new Date().toISOString(),
  })
})

// ─── POST /api/lobby/create ────────────────────────────────────────────────────

app.post('/api/lobby/create', async (req, res) => {
  // ── 1. Bot readiness gate ──
  if (!botReady) {
    return res.status(503).json({
      success: false,
      error: 'Discord bot is not yet ready. Please try again in a moment.',
    })
  }

  // ── 2. Input validation layer ──
  const { lobbyTitle, userCount } = req.body

  if (
    typeof lobbyTitle !== 'string' ||
    lobbyTitle.trim().length === 0 ||
    lobbyTitle.trim().length > 100
  ) {
    return res.status(400).json({
      success: false,
      error:
        'Invalid lobbyTitle: must be a non-empty string with a maximum of 100 characters.',
    })
  }

  const rawCount = parseInt(userCount, 10)
  if (isNaN(rawCount)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid userCount: must be a valid integer.',
    })
  }

  // Clamp between 1 and 99 — Discord voice channel user limit range
  const clampedCount = Math.max(1, Math.min(99, rawCount))
  const sanitizedTitle = lobbyTitle.trim()

  // Construct a safe channel name: lowercase, hyphens, max 100 chars
  const channelName = `lobby-${sanitizedTitle
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 90)}`

  // ── 3. Guild resolution ──
  let guild
  try {
    guild = await discordClient.guilds.fetch(GUILD_ID)
  } catch (fetchErr) {
    console.error('[lobby-bot] Failed to fetch guild:', fetchErr)
    return res.status(500).json({
      success: false,
      error: `Could not resolve Discord guild (ID: ${GUILD_ID}). Ensure the bot is a member of that server.`,
    })
  }

  if (!guild) {
    return res.status(404).json({
      success: false,
      error: `Guild with ID ${GUILD_ID} was not found. Verify GUILD_ID in your .env file.`,
    })
  }

  // ── 4. Channel provisioning ──
  let voiceChannel
  const channelOptions = {
    name: channelName,
    type: ChannelType.GuildVoice,
    userLimit: clampedCount,
    reason: `lobby. platform — created for: "${sanitizedTitle}"`,
  }

  // Attach to a category if CATEGORY_ID is configured
  if (CATEGORY_ID) {
    channelOptions.parent = CATEGORY_ID
  }

  try {
    voiceChannel = await guild.channels.create(channelOptions)
    console.log(`[lobby-bot] ✅ Voice channel created: #${voiceChannel.name} (ID: ${voiceChannel.id})`)
  } catch (createErr) {
    console.error('[lobby-bot] Failed to create voice channel:', createErr)
    return res.status(500).json({
      success: false,
      error: `Failed to create Discord voice channel. Check that the bot has MANAGE_CHANNELS permission in your server. Detail: ${createErr.message}`,
    })
  }

  // ── 5. Invite generation ──
  let invite
  try {
    invite = await voiceChannel.createInvite({
      maxAge: 300,        // 5-minute expiry
      maxUses: clampedCount,
      unique: true,
      reason: `lobby. one-time invite for "${sanitizedTitle}"`,
    })
    console.log(`[lobby-bot] ✅ Invite created: ${invite.url} (expires in 5 min, max ${clampedCount} uses)`)
  } catch (inviteErr) {
    console.error('[lobby-bot] Failed to create invite:', inviteErr)
    // Attempt to clean up the orphaned channel
    try {
      await voiceChannel.delete('lobby. — invite creation failed, removing orphaned channel')
      console.log(`[lobby-bot] 🗑 Cleaned up orphaned channel: ${voiceChannel.id}`)
    } catch (deleteErr) {
      console.error('[lobby-bot] Also failed to clean up orphaned channel:', deleteErr)
    }
    return res.status(500).json({
      success: false,
      error: `Voice channel was created but invite generation failed. Check that the bot has CREATE_INSTANT_INVITE permission. Detail: ${inviteErr.message}`,
    })
  }

  // ── 6. Schedule channel auto-deletion after invite expires + buffer ──
  //    (5 minutes + 60 second buffer = 360 seconds)
  setTimeout(async () => {
    try {
      const channelStillExists = guild.channels.cache.get(voiceChannel.id)
      if (channelStillExists) {
        await voiceChannel.delete('lobby. — temporary channel TTL expired')
        console.log(`[lobby-bot] 🗑 Auto-deleted expired channel: ${voiceChannel.name} (ID: ${voiceChannel.id})`)
      }
    } catch (cleanupErr) {
      console.warn(`[lobby-bot] Could not auto-delete channel ${voiceChannel.id}:`, cleanupErr.message)
    }
  }, 360_000)

  // ── 7. Success response ──
  return res.status(200).json({
    success: true,
    channelId: voiceChannel.id,
    channelName: voiceChannel.name,
    inviteUrl: invite.url,
  })
})

// ─── 404 FALLBACK ──────────────────────────────────────────────────────────────

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found. Available endpoints: POST /api/lobby/create, GET /health',
  })
})

// ─── GLOBAL ERROR HANDLER ─────────────────────────────────────────────────────

app.use((err, _req, res, _next) => {
  console.error('[lobby-bot] Unhandled Express error:', err)
  res.status(500).json({
    success: false,
    error: 'Internal server error. Check server logs for details.',
  })
})

// ─── BOOT SEQUENCE ─────────────────────────────────────────────────────────────

async function boot() {
  try {
    // Login to Discord
    console.log('[lobby-bot] 🔑 Logging in to Discord...')
    await discordClient.login(DISCORD_TOKEN)
  } catch (loginErr) {
    console.error('[lobby-bot] ❌ Discord login failed:', loginErr.message)
    console.error('[lobby-bot]    Verify that DISCORD_TOKEN in your .env is valid and has not expired.')
    process.exit(1)
  }

  // Start Express HTTP server
  app.listen(PORT, () => {
    console.log(`[lobby-bot] 🚀 API server running at http://localhost:${PORT}`)
    console.log(`[lobby-bot] 📡 Listening for requests on POST /api/lobby/create`)
  })
}

// ─── GRACEFUL SHUTDOWN ────────────────────────────────────────────────────────

process.on('SIGINT', async () => {
  console.log('\n[lobby-bot] 🛑 SIGINT received — shutting down gracefully...')
  try {
    discordClient.destroy()
    console.log('[lobby-bot] Discord client destroyed.')
  } catch (_) {
    // swallow
  }
  process.exit(0)
})

process.on('SIGTERM', async () => {
  console.log('\n[lobby-bot] 🛑 SIGTERM received — shutting down gracefully...')
  try {
    discordClient.destroy()
    console.log('[lobby-bot] Discord client destroyed.')
  } catch (_) {
    // swallow
  }
  process.exit(0)
})

process.on('unhandledRejection', (reason) => {
  console.error('[lobby-bot] Unhandled Promise Rejection:', reason)
})

boot()
