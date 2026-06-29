/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0B0D',
        graphite: '#141417',
        carbon: '#1C1D21',
        mist: '#A7A6A2',
        smoke: '#E8E6E1',
        gold: '#C9A35C',
        champagne: '#E4D2A8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.28em',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
