/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#555555",
        secondary:"#1A1A1A",
        accent:"#D0B08A",
        text:"#777777"
      }
    },
  },
  plugins: [],
}
