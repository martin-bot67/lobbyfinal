/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.{js,jsx,ts,tsx}', './**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#a855f7',
          'purple-dim': '#7c3aed',
          'purple-glow': 'rgba(168,85,247,0.15)',
        },
        cs2: {
          red: '#f87171',
          'red-dim': '#dc2626',
          'red-glow': 'rgba(248,113,113,0.12)',
        },
        gta: {
          cyan: '#22d3ee',
          'cyan-dim': '#0891b2',
          'cyan-glow': 'rgba(34,211,238,0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tight: '-0.025em',
      },
    },
  },
  plugins: [],
}
