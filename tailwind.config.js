/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)','var(--font-noto-sans-jp)' , ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}