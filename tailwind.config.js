/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBlue:"#01C0B7",
        'dark1':"#1E1D1D",
        'dark2':"#707272",
        'dark3':"#9C9C9C",
      }
    },
  },
  plugins: [],
}

