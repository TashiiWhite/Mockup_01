/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0B0D',
        graphite: '#141417',
        carbon: '#1C1D21',
        slate: '#26272C',
        mist: '#A7A6A2',
        smoke: '#E8E6E1',
        // Gold / bronze ramp (art-directed, multi-tone)
        bronze: '#8A6A35',
        gold: '#C9A35C',
        champagne: '#E4D2A8',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 7.5vw, 7rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(2.25rem, 5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
      },
      letterSpacing: {
        widest: '0.28em',
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(201,163,92,0.15), 0 30px 60px -25px rgba(0,0,0,0.8)',
        'glow-gold': '0 20px 60px -20px rgba(201,163,92,0.35)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3.5s linear infinite',
      },
    },
  },
  plugins: [],
}
