/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'navy-navbar': '#0C2D57',
        'grey-bg': '#EFECEC',
        'orange-banner': '#FC6736',
        'peach-hero': '#FFB0B0',
        'bluish': '#2E5A8E',
        'rgba-black': 'rgba(0, 0, 0, 0.55)',
        'rgba-black-2': 'rgba(0, 0, 0, 0.70)',
      },
      height: {
        '13': '3.125rem',
        '17.5': '4.5rem',
        '19.5': '19.371rem'
      },
      fontSize: {
        '4.5xl': '2.25rem'
      },
      colors: {
        'navy': '#0C2D57',
        'grey-bg': '#EFECEC',
        'orange-banner': '#FC6736',
        'peach-hero': '#FFB0B0',
        'bluish': '#2E5A8E',
      },
      maxHeight: {
        "14" : '3.250rem'
      },
      rotate:{
        "icon" : "180deg"
      }
    },
  },
  plugins: [],
}
