/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F4EE',
        cream: '#EFE9DE',
        ink: '#1A1814',
        stone: '#6B655B',
        gold: '#B08D4F',
        champagne: '#D8C7A3',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
