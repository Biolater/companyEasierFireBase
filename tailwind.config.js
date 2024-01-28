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
      },
      height: {
        '13' : '3.125rem',
      },
      
    },
  },
  plugins: [],
}
