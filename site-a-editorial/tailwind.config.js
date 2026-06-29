/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces
        porcelain: '#FCFAF6',
        ivory: '#F7F4EE',
        cream: '#EFE9DE',
        sand: '#E6DCC9',
        ink: '#1A1814',
        stone: '#6B655B',
        // Gold / bronze ramp (3+ tones, art-directed)
        bronze: '#7A5C2E', // deep — passes AA on light backgrounds (labels)
        gold: '#B08D4F', // base accent
        champagne: '#D8C7A3', // light accent
        goldwash: '#EFE6D3', // faint background tint
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // A genuine display step beyond the body scale
        display: ['clamp(2.75rem, 7vw, 6rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(2.25rem, 5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        luxe: '0 30px 60px -20px rgba(26, 24, 20, 0.25)',
        'luxe-sm': '0 16px 40px -16px rgba(26, 24, 20, 0.22)',
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
