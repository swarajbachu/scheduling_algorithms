/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '4px 6px 6px -2px rgba(0, 57, 78, 0.2)',
      }
    },
  },
  plugins: [],
}