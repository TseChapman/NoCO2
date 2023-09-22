const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['"Heebo"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'cabbagePoint': '#45523e',
        'cloudy': '#b0aca2',
        'merino': '#f5ece5',
        'limeGreen': '#528265',
        'matrix': '#ad5d50',
      },
      backgroundColor: {
        'cabbagePoint': '#45523e',
        'cloudy': '#b0aca2',
        'merino': '#f5ece5',
        'limeGreen': '#528265',
        'matrix': '#ad5d50',
      }
    },
  },
  plugins: [],
}

