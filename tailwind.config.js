/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '414px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)','var(--font-noto-sans-jp)' , ...defaultTheme.fontFamily.sans],
        title: ['var(--font-barlow-semi-condensed)', 'var(--font-roboto)','var(--font-noto-sans-jp)' , ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}