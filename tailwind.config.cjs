/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        saira: ['Saira'],
        poppins: ['Poppins']
      },
      colors: {
        hero: '#0D031E'
      }
    },
  },
  plugins: [],
}
