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
        hero: '#0D031E',
        darkbg: '#070014',
        fade: '#5C00FF',
        boxPurple: '#11032C'
      },
      boxShadow: {
        'about': '0px 0px 37px 0px rgba(0,0,0,0.65)',
        'radial': '0px 0px 800px 80px #653FA6',
        'fade': '-18px -18px 30px -18px rgba(92,0,255,0.82)'
      },
      backgroundImage: {
        'trader': "url('/tierbg.webp')"
      }
    },
  },
  plugins: [],
}
