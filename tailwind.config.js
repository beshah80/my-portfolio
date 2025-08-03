// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{tsx,css}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        accent: '#3B82F6',
        secondary: '#E5E7EB',
        highlight: '#10B981',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};