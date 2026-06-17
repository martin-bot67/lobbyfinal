import { useState, useEffect, useCallback } from 'react'

// ─── SVG ICONS ────────────────────────────────────────────────────────────────

const IconDiscord = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.055a19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-4 h-4" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const IconPlus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const IconArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-4 h-4" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-4 h-4" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const IconLoader = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 animate-spin" aria-hidden="true">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" strokeLinecap="round" />
  </svg>
)

const IconTag = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-3.5 h-3.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
)

const IconGamepad = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6" aria-hidden="true">
    <line x1="6" y1="12" x2="10" y2="12" />
    <line x1="8" y1="10" x2="8" y2="14" />
    <line x1="15" y1="13" x2="15.01" y2="13" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="18" y1="11" x2="18.01" y2="11" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="2" y="6" width="20" height="12" rx="2" />
  </svg>
)

// ─── SEED DATA ─────────────────────────────────────────────────────────────────

const SEED_CS2 = [
  {
    id: 'cs2-1',
    game: 'cs2',
    title: 'Premier Grind — 18k+ Only',
    host: '@frostbyte',
    rank: 'Premier 18,000+',
    playstyle: 'Competitive',
    playerCount: 3,
    playerMax: 5,
    tags: ['entry-fragger', 'comms', 'faceit-ready'],
    createdAt: Date.now() - 1000 * 60 * 8,
  },
  {
    id: 'cs2-2',
    game: 'cs2',
    title: 'Rank Up Run — Chill Vibes',
    host: '@quietstorm',
    rank: 'Gold Nova+',
    playstyle: 'Casual',
    playerCount: 2,
    playerMax: 5,
    tags: ['no-rage', 'learning', 'mic-required'],
    createdAt: Date.now() - 1000 * 60 * 22,
  },
  {
    id: 'cs2-3',
    game: 'cs2',
    title: 'IGL Needed — Inferno Specialists',
    host: '@mapking',
    rank: 'MG2+',
    playstyle: 'Competitive',
    playerCount: 4,
    playerMax: 5,
    tags: ['igl', 'inferno', 'tactical'],
    createdAt: Date.now() - 1000 * 60 * 45,
  },
  {
    id: 'cs2-4',
    game: 'cs2',
    title: 'Sunday Warmup — Any Rank',
    host: '@neonpulse',
    rank: 'Any',
    playstyle: 'Casual',
    playerCount: 1,
    playerMax: 5,
    tags: ['warmup', 'any-rank', 'fun'],
    createdAt: Date.now() - 1000 * 60 * 60,
  },
]

const SEED_GTA5 = [
  {
    id: 'gta5-1',
    game: 'gta5',
    title: 'Cayo Perico — 2x Money Week',
    host: '@cashflow99',
    rank: 'CEO',
    playstyle: 'Casual',
    playerCount: 2,
    playerMax: 4,
    tags: ['heist', '2x-money', 'experienced'],
    createdAt: Date.now() - 1000 * 60 * 5,
  },
  {
    id: 'gta5-2',
    game: 'gta5',
    title: 'Car Meet & Race Night',
    host: '@lowrider',
    rank: 'Any',
    playstyle: 'Casual',
    playerCount: 7,
    playerMax: 20,
    tags: ['car-meet', 'races', 'cruising'],
    createdAt: Date.now() - 1000 * 60 * 15,
  },
  {
    id: 'gta5-3',
    game: 'gta5',
    title: 'Bunker Sell — Need Gunners',
    host: '@warzone_wes',
    rank: 'VIP',
    playstyle: 'Competitive',
    playerCount: 1,
    playerMax: 3,
    tags: ['bunker', 'sell', 'gunner-needed'],
    createdAt: Date.now() - 1000 * 60 * 33,
  },
  {
    id: 'gta5-4',
    game: 'gta5',
    title: 'PvP Session — No Safe Zones',
    host: '@phantomsix',
    rank: 'K/D 2.0+',
    playstyle: 'Competitive',
    playerCount: 4,
    playerMax: 10,
    tags: ['pvp', 'sweats', 'kd-matters'],
    createdAt: Date.now() - 1000 * 60 * 55,
  },
]

// ─── UTILITIES ─────────────────────────────────────────────────────────────────

function timeAgo(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000)
  if (seconds < 60) return `${seconds}s ago`
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  return `${hours}h ago`
}

function generateId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

// ─── GAME CONFIG ────────────────────────────────────────────────────────────────

const GAME_CONFIG = {
  cs2: {
    label: 'Counter-Strike 2',
    shortLabel: 'CS2',
    accent: '#f87171',
    accentDim: '#dc2626',
    accentGlow: 'rgba(248,113,113,0.12)',
    accentBorder: 'rgba(248,113,113,0.3)',
    badgeBg: 'rgba(248,113,113,0.1)',
    description: 'Tactical first-person shooter. Competitive ranked matches and casual play.',
    rankLabel: 'Rank Requirement',
    playstyleDefault: 'Competitive',
  },
  gta5: {
    label: 'Grand Theft Auto V',
    shortLabel: 'GTA V',
    accent: '#22d3ee',
    accentDim: '#0891b2',
    accentGlow: 'rgba(34,211,238,0.12)',
    accentBorder: 'rgba(34,211,238,0.3)',
    badgeBg: 'rgba(34,211,238,0.1)',
    description: 'Open-world sandbox. Heists, races, car meets, and free-roam sessions.',
    rankLabel: 'Activity / Requirement',
    playstyleDefault: 'Casual',
  },
}

// ─── SUB-COMPONENTS ────────────────────────────────────────────────────────────

function LobbyTag({ label }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono font-medium text-slate-400 bg-slate-800 border border-slate-700">
      <IconTag />
      {label}
    </span>
  )
}

function PlaystyleBadge({ style, game }) {
  const cfg = GAME_CONFIG[game]
  const isCompetitive = style === 'Competitive'
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold tracking-wide uppercase"
      style={{
        color: isCompetitive ? cfg.accent : '#94a3b8',
        backgroundColor: isCompetitive ? cfg.badgeBg : 'rgba(148,163,184,0.08)',
        border: `1px solid ${isCompetitive ? cfg.accentBorder : 'rgba(148,163,184,0.2)'}`,
      }}
    >
      {isCompetitive ? <IconShield /> : <IconStar />}
      {style}
    </span>
  )
}

function PlayerBar({ count, max, accent }) {
  const pct = Math.min((count / max) * 100, 100)
  return (
    <div className="w-full h-1 rounded-full bg-slate-800 overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${pct}%`, backgroundColor: accent }}
      />
    </div>
  )
}

// ─── LOBBY CARD ────────────────────────────────────────────────────────────────

function LobbyCard({ lobby, game }) {
  const cfg = GAME_CONFIG[game]
  const [joinState, setJoinState] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const isFull = lobby.playerCount >= lobby.playerMax

  const handleJoin = useCallback(async () => {
    if (joinState === 'loading' || isFull) return
    setJoinState('loading')
    setErrorMsg('')

    try {
      const response = await fetch('/api/lobby/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lobbyTitle: lobby.title,
          userCount: lobby.playerMax,
        }),
      })

      if (!response.ok) {
        let message = `Server returned ${response.status}`
        try {
          const errData = await response.json()
          if (errData && errData.error) message = errData.error
        } catch (_) {
          // response body was not JSON, use status message
        }
        throw new Error(message)
      }

      const data = await response.json()

      if (!data.success || !data.inviteUrl) {
        throw new Error('Invalid response from server: missing invite URL.')
      }

      setJoinState('success')
      window.open(data.inviteUrl, '_blank', 'noopener,noreferrer')

      setTimeout(() => {
        setJoinState('idle')
      }, 4000)
    } catch (err) {
      setJoinState('error')
      setErrorMsg(err.message || 'Unknown error. Check the console.')
      setTimeout(() => {
        setJoinState('idle')
        setErrorMsg('')
      }, 6000)
    }
  }, [joinState, isFull, lobby])

  const btnLabel = () => {
    if (isFull) return 'Lobby Full'
    if (joinState === 'loading') return 'Creating channel…'
    if (joinState === 'success') return 'Redirecting…'
    if (joinState === 'error') return 'Retry'
    return 'Join Discord Voice'
  }

  const btnStyle = () => {
    const base = {
      transition: 'all 0.15s ease',
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      padding: '0.45rem 1rem',
      borderRadius: '6px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      cursor: isFull ? 'not-allowed' : 'pointer',
      border: '1px solid',
      opacity: isFull ? 0.45 : 1,
    }
    if (joinState === 'error') {
      return { ...base, backgroundColor: 'rgba(248,113,113,0.1)', color: '#f87171', borderColor: 'rgba(248,113,113,0.4)' }
    }
    if (joinState === 'success') {
      return { ...base, backgroundColor: 'rgba(34,197,94,0.1)', color: '#4ade80', borderColor: 'rgba(34,197,94,0.4)' }
    }
    if (isFull) {
      return { ...base, backgroundColor: 'rgba(100,116,139,0.1)', color: '#64748b', borderColor: 'rgba(100,116,139,0.2)' }
    }
    return {
      ...base,
      backgroundColor: 'rgba(88,28,235,0.15)',
      color: '#a855f7',
      borderColor: 'rgba(168,85,247,0.35)',
    }
  }

  return (
    <div
      className="card-hover relative flex flex-col gap-3 rounded-xl p-5 border"
      style={{
        backgroundColor: '#0f172a',
        borderColor: 'rgba(51,65,85,0.6)',
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-slate-100 leading-snug truncate">{lobby.title}</h3>
          <p className="text-xs text-slate-500 mt-0.5 font-mono">{lobby.host}</p>
        </div>
        <PlaystyleBadge style={lobby.playstyle} game={game} />
      </div>

      {/* Rank row */}
      <div className="flex items-center gap-1.5 text-xs text-slate-400">
        <span className="text-slate-600 uppercase tracking-widest text-[10px] font-semibold">{cfg.rankLabel}:</span>
        <span className="text-slate-300 font-mono font-medium">{lobby.rank}</span>
      </div>

      {/* Tags */}
      {lobby.tags && lobby.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {lobby.tags.map((tag) => (
            <LobbyTag key={tag} label={tag} />
          ))}
        </div>
      )}

      {/* Player bar */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <IconUsers />
            <span>
              <span className="font-semibold" style={{ color: cfg.accent }}>{lobby.playerCount}</span>
              <span className="text-slate-600"> / {lobby.playerMax}</span>
            </span>
          </div>
          <span className="text-[10px] text-slate-600 font-mono">{timeAgo(lobby.createdAt)}</span>
        </div>
        <PlayerBar count={lobby.playerCount} max={lobby.playerMax} accent={cfg.accent} />
      </div>

      {/* Error diagnostic */}
      {joinState === 'error' && errorMsg && (
        <div className="rounded-lg px-3 py-2 text-xs font-mono text-red-400 bg-red-950/40 border border-red-900/50 break-all">
          <span className="text-red-600 font-semibold">ERR › </span>{errorMsg}
        </div>
      )}

      {/* Join CTA */}
      <button
        onClick={handleJoin}
        disabled={isFull || joinState === 'loading' || joinState === 'success'}
        className="btn-transition self-start"
        style={btnStyle()}
        aria-label={`Join lobby: ${lobby.title}`}
      >
        {joinState === 'loading' ? <IconLoader /> : <IconDiscord />}
        {btnLabel()}
      </button>
    </div>
  )
}

// ─── CREATE MODAL ──────────────────────────────────────────────────────────────

function CreateModal({ game, onClose, onSubmit }) {
  const cfg = GAME_CONFIG[game]
  const [title, setTitle] = useState('')
  const [rank, setRank] = useState('')
  const [playstyle, setPlaystyle] = useState(cfg.playstyleDefault)
  const [tags, setTags] = useState('')
  const [playerMax, setPlayerMax] = useState(game === 'cs2' ? 5 : 10)
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!title.trim()) {
      setError('Lobby title is required.')
      return
    }
    if (title.trim().length < 4) {
      setError('Title must be at least 4 characters.')
      return
    }
    const parsedTags = tags
      .split(',')
      .map((t) => t.trim().toLowerCase().replace(/\s+/g, '-'))
      .filter((t) => t.length > 0)
      .slice(0, 6)

    const newLobby = {
      id: generateId(),
      game,
      title: title.trim(),
      host: '@Guest',
      rank: rank.trim() || 'Any',
      playstyle,
      playerCount: 1,
      playerMax: Math.max(2, Math.min(99, playerMax)),
      tags: parsedTags,
      createdAt: Date.now(),
    }

    onSubmit(newLobby)
    onClose()
  }

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const inputClass =
    'w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/40 transition-all duration-150'
  const labelClass = 'block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(2,6,23,0.85)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label="Create lobby"
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-slate-800 shadow-2xl animate-fade-up"
        style={{ backgroundColor: '#0c1526' }}
      >
        {/* Modal header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b border-slate-800"
          style={{ borderBottom: `1px solid ${cfg.accentBorder}` }}
        >
          <div>
            <h2 className="text-base font-bold text-slate-100 tracking-tight">Create Lobby</h2>
            <p className="text-xs text-slate-500 mt-0.5">{cfg.label}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors duration-150"
            aria-label="Close modal"
          >
            <IconClose />
          </button>
        </div>

        {/* Modal body */}
        <div className="px-6 py-5 space-y-4">
          {/* Title */}
          <div>
            <label className={labelClass}>Lobby Title *</label>
            <input
              type="text"
              className={inputClass}
              placeholder="e.g. Premier Grind — 18k+ only"
              value={title}
              onChange={(e) => { setTitle(e.target.value); setError('') }}
              maxLength={80}
              autoFocus
            />
          </div>

          {/* Rank / Activity */}
          <div>
            <label className={labelClass}>{cfg.rankLabel}</label>
            <input
              type="text"
              className={inputClass}
              placeholder={game === 'cs2' ? 'e.g. Gold Nova+, Premier 15k+' : 'e.g. CEO, K/D 1.5+, Any'}
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              maxLength={40}
            />
          </div>

          {/* Player max */}
          <div>
            <label className={labelClass}>Max Players</label>
            <input
              type="number"
              className={inputClass}
              value={playerMax}
              min={2}
              max={99}
              onChange={(e) => setPlayerMax(parseInt(e.target.value, 10) || 2)}
            />
          </div>

          {/* Playstyle toggle */}
          <div>
            <label className={labelClass}>Playstyle</label>
            <div className="flex gap-2">
              {['Competitive', 'Casual'].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setPlaystyle(opt)}
                  className="btn-transition flex-1 py-2 rounded-lg text-xs font-semibold uppercase tracking-widest border"
                  style={{
                    backgroundColor: playstyle === opt ? `${cfg.accentGlow}` : 'transparent',
                    color: playstyle === opt ? cfg.accent : '#64748b',
                    borderColor: playstyle === opt ? cfg.accentBorder : 'rgba(51,65,85,0.6)',
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className={labelClass}>Tags <span className="normal-case font-normal text-slate-600">(comma-separated, max 6)</span></label>
            <input
              type="text"
              className={inputClass}
              placeholder="e.g. mic-required, no-rage, igl"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              maxLength={200}
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-xs font-mono text-red-400 bg-red-950/40 border border-red-900/50 rounded-lg px-3 py-2">
              {error}
            </p>
          )}
        </div>

        {/* Modal footer */}
        <div className="flex items-center justify-end gap-3 px-6 pb-5">
          <button
            onClick={onClose}
            className="btn-transition px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-all duration-150"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="btn-transition px-5 py-2 rounded-lg text-sm font-semibold border"
            style={{
              backgroundColor: 'rgba(168,85,247,0.12)',
              color: '#a855f7',
              borderColor: 'rgba(168,85,247,0.35)',
            }}
          >
            Post Lobby
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── EMPTY STATE ───────────────────────────────────────────────────────────────

function EmptyState({ game, onCreateClick }) {
  const cfg = GAME_CONFIG[game]
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center animate-fade-up">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
        style={{ backgroundColor: cfg.accentGlow, border: `1px solid ${cfg.accentBorder}` }}
      >
        <IconGamepad />
      </div>
      <p className="text-base font-semibold text-slate-300 mb-1">No active lobbies found matching these filters.</p>
      <p className="text-sm text-slate-600 mb-6 max-w-xs">
        Be the first to start a session. Create a lobby and players will find you.
      </p>
      <button
        onClick={onCreateClick}
        className="btn-transition inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border"
        style={{
          backgroundColor: cfg.accentGlow,
          color: cfg.accent,
          borderColor: cfg.accentBorder,
        }}
      >
        <IconPlus />
        Create Lobby
      </button>
    </div>
  )
}

// ─── PARTY FEED VIEW ───────────────────────────────────────────────────────────

function PartyFeedView({ game, onBack }) {
  const cfg = GAME_CONFIG[game]
  const [activeFilter, setActiveFilter] = useState('All')
  const [lobbies, setLobbies] = useState(game === 'cs2' ? SEED_CS2 : SEED_GTA5)
  const [showModal, setShowModal] = useState(false)

  const filters = ['All', 'Competitive', 'Casual']

  const filteredLobbies =
    activeFilter === 'All'
      ? lobbies
      : lobbies.filter((l) => l.playstyle === activeFilter)

  const handleNewLobby = useCallback((lobby) => {
    setLobbies((prev) => [lobby, ...prev])
    setActiveFilter('All')
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#020617' }}>
      {/* Top bar */}
      <div
        className="sticky top-0 z-40 border-b"
        style={{
          backgroundColor: 'rgba(2,6,23,0.85)',
          backdropFilter: 'blur(12px)',
          borderColor: 'rgba(51,65,85,0.5)',
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Left: Back + Title */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="btn-transition inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-200 uppercase tracking-widest"
            >
              <IconArrowLeft />
              Back to Games
            </button>
            <div className="w-px h-5 bg-slate-800" />
            <div className="flex items-center gap-2">
              <span
                className="text-sm font-bold tracking-tight"
                style={{ color: cfg.accent }}
              >
                {cfg.shortLabel}
              </span>
              <span className="text-slate-700 font-mono text-xs">·</span>
              <span className="text-sm font-semibold text-slate-300">Active Lobbies</span>
            </div>
          </div>

          {/* Right: Create button */}
          <button
            onClick={() => setShowModal(true)}
            className="btn-transition inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide border"
            style={{
              backgroundColor: 'rgba(168,85,247,0.1)',
              color: '#a855f7',
              borderColor: 'rgba(168,85,247,0.3)',
            }}
          >
            <IconPlus />
            Create Lobby
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-16">
        {/* Game header */}
        <div className="mb-8">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ backgroundColor: cfg.accentGlow, color: cfg.accent, border: `1px solid ${cfg.accentBorder}` }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: cfg.accent }} />
            Live Sessions
          </div>
          <h1 className="text-3xl font-black text-slate-50 tracking-tighter leading-none mb-2">
            {cfg.label}
          </h1>
          <p className="text-sm text-slate-500">{cfg.description}</p>
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs text-slate-600 font-semibold uppercase tracking-widest mr-1">Filter:</span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="btn-transition px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide border"
              style={{
                backgroundColor:
                  activeFilter === f
                    ? f === 'Competitive'
                      ? cfg.accentGlow
                      : f === 'Casual'
                      ? 'rgba(148,163,184,0.1)'
                      : 'rgba(168,85,247,0.1)'
                    : 'transparent',
                color:
                  activeFilter === f
                    ? f === 'Competitive'
                      ? cfg.accent
                      : f === 'Casual'
                      ? '#94a3b8'
                      : '#a855f7'
                    : '#475569',
                borderColor:
                  activeFilter === f
                    ? f === 'Competitive'
                      ? cfg.accentBorder
                      : f === 'Casual'
                      ? 'rgba(148,163,184,0.25)'
                      : 'rgba(168,85,247,0.3)'
                    : 'rgba(51,65,85,0.5)',
              }}
            >
              {f}
              {f !== 'All' && (
                <span className="ml-1.5 text-[10px] opacity-60">
                  {lobbies.filter((l) => l.playstyle === f).length}
                </span>
              )}
            </button>
          ))}
          <span className="ml-auto text-xs text-slate-600 font-mono">
            {filteredLobbies.length} {filteredLobbies.length === 1 ? 'lobby' : 'lobbies'}
          </span>
        </div>

        {/* Feed or empty state */}
        {filteredLobbies.length === 0 ? (
          <EmptyState game={game} onCreateClick={() => setShowModal(true)} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-up">
            {filteredLobbies.map((lobby) => (
              <LobbyCard key={lobby.id} lobby={lobby} game={game} />
            ))}
          </div>
        )}
      </div>

      {/* Create modal */}
      {showModal && (
        <CreateModal
          game={game}
          onClose={() => setShowModal(false)}
          onSubmit={handleNewLobby}
        />
      )}
    </div>
  )
}

// ─── HOME VIEW ─────────────────────────────────────────────────────────────────

function HomeView({ onSelectGame }) {
  const [hoveredGame, setHoveredGame] = useState(null)

  const games = [
    {
      key: 'cs2',
      label: 'Counter-Strike 2',
      sublabel: 'Tactical Shooter',
      accent: '#f87171',
      accentGlow: 'rgba(248,113,113,0.08)',
      accentBorder: 'rgba(248,113,113,0.2)',
      activeGlow: 'rgba(248,113,113,0.14)',
      activeBorder: 'rgba(248,113,113,0.45)',
      description: 'Precision FPS. Five-on-five bomb defusal. Ranked Premier and Competitive.',
      stat: '1.2M+ daily players',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
          <rect x="4" y="20" width="40" height="8" rx="2" stroke="#f87171" strokeWidth="2" fill="rgba(248,113,113,0.1)" />
          <rect x="14" y="10" width="8" height="28" rx="2" stroke="#f87171" strokeWidth="2" fill="rgba(248,113,113,0.1)" />
          <circle cx="34" cy="24" r="6" stroke="#f87171" strokeWidth="2" fill="rgba(248,113,113,0.08)" />
          <line x1="34" y1="18" x2="34" y2="16" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
          <line x1="34" y1="30" x2="34" y2="32" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
          <line x1="28" y1="24" x2="26" y2="24" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
          <line x1="40" y1="24" x2="42" y2="24" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      key: 'gta5',
      label: 'Grand Theft Auto V',
      sublabel: 'Open World Sandbox',
      accent: '#22d3ee',
      accentGlow: 'rgba(34,211,238,0.08)',
      accentBorder: 'rgba(34,211,238,0.2)',
      activeGlow: 'rgba(34,211,238,0.14)',
      activeBorder: 'rgba(34,211,238,0.45)',
      description: 'Los Santos awaits. Heists, races, car meets, and chaotic free-roam sessions.',
      stat: '800K+ online weekly',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
          <path d="M8 32 L20 12 L28 22 L34 16 L44 32 Z" stroke="#22d3ee" strokeWidth="2" strokeLinejoin="round" fill="rgba(34,211,238,0.08)" />
          <circle cx="14" cy="36" r="4" stroke="#22d3ee" strokeWidth="2" fill="rgba(34,211,238,0.1)" />
          <circle cx="36" cy="36" r="4" stroke="#22d3ee" strokeWidth="2" fill="rgba(34,211,238,0.1)" />
          <line x1="18" y1="36" x2="32" y2="36" stroke="#22d3ee" strokeWidth="2" />
          <path d="M24 22 L24 12 M20 18 L24 12 L28 18" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#020617' }}>
      {/* Header */}
      <header className="flex-shrink-0 pt-16 pb-12 text-center px-4">
        <div className="inline-flex items-center gap-2 mb-8">
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: '#a855f7' }}
          />
          <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-widest">
            LFG Platform
          </span>
        </div>
        <h1
          className="text-7xl sm:text-8xl font-black tracking-tightest text-slate-50 leading-none mb-3"
          style={{ letterSpacing: '-0.06em' }}
        >
          lobby<span style={{ color: '#a855f7' }}>.</span>
        </h1>
        <p className="text-sm text-slate-500 max-w-sm mx-auto">
          Find your squad. Pick a game to browse active parties or post your own.
        </p>
      </header>

      {/* Game cards */}
      <main className="flex-1 flex flex-col items-center justify-start px-4 sm:px-6">
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-5">
          {games.map((g) => {
            const isHovered = hoveredGame === g.key
            return (
              <button
                key={g.key}
                onClick={() => onSelectGame(g.key)}
                onMouseEnter={() => setHoveredGame(g.key)}
                onMouseLeave={() => setHoveredGame(null)}
                className="card-hover group relative text-left w-full rounded-2xl p-7 border focus:outline-none focus-visible:ring-2"
                style={{
                  backgroundColor: isHovered ? '#111827' : '#0d1324',
                  borderColor: isHovered ? g.activeBorder : g.accentBorder,
                  boxShadow: isHovered ? `0 0 32px ${g.accentGlow}` : 'none',
                  focusVisibleRingColor: g.accent,
                }}
                aria-label={`Browse ${g.label} lobbies`}
              >
                {/* Subtle bg gradient on hover */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-200"
                  style={{
                    background: `radial-gradient(ellipse at 20% 20%, ${g.activeGlow} 0%, transparent 65%)`,
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                <div className="relative z-10">
                  <div className="mb-5">{g.icon}</div>

                  <div
                    className="text-[10px] font-mono font-semibold uppercase tracking-widest mb-1"
                    style={{ color: g.accent }}
                  >
                    {g.sublabel}
                  </div>

                  <h2
                    className="text-xl font-black text-slate-50 tracking-tight leading-tight mb-2"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    {g.label}
                  </h2>

                  <p className="text-xs text-slate-500 leading-relaxed mb-5">{g.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-600">{g.stat}</span>
                    <div
                      className="flex items-center gap-1.5 text-xs font-semibold"
                      style={{ color: g.accent }}
                    >
                      Browse lobbies
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3" aria-hidden="true">
                        <path d="M3 8h10M8 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Footer note */}
        <p className="mt-12 mb-8 text-xs text-slate-700 font-mono">
          powered by discord voice channels · {new Date().getFullYear()}
        </p>
      </main>
    </div>
  )
}

// ─── ROOT APP ──────────────────────────────────────────────────────────────────

export default function App() {
  const [currentView, setCurrentView] = useState('home') // 'home' | 'cs2' | 'gta5'

  const handleSelectGame = useCallback((gameKey) => {
    setCurrentView(gameKey)
  }, [])

  const handleBack = useCallback(() => {
    setCurrentView('home')
  }, [])

  if (currentView === 'home') {
    return <HomeView onSelectGame={handleSelectGame} />
  }

  return <PartyFeedView game={currentView} onBack={handleBack} />
}
