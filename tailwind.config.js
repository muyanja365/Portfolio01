/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',
        base: '#1A1A1A',
        text: '#E5E5E5',
        accent: '#4B0082',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin') // ✅ make sure this exists
  ],
}
