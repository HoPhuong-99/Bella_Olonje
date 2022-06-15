/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat :["Montserrat"],
      roboto:["Roboto"],
      poppins:["Poppins"]
    },

    extend: {
      backgroundImage: {
        'background-footer' : "url('./src/assets/desktop/FooterBG.png')"
      }
    },
  },
  plugins: [],
}
