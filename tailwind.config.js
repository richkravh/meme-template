/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        primred : "#F95454",
        secondred : "#C62E2E"
      },
      fontFamily: {
        'jersey' : ['"Jersey 25"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

