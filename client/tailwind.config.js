/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'jade': '#8ad7f8',
        'heading': '#207da8',
        'button': '#72badb',
        'hoverButton': '#005d3a',
      },
    },
  },
  plugins: [],
}

