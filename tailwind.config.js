/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#FFE799',
        customBlue: '#1B263B', // Adjust the blue color as needed
      },
    },
  },
  plugins: [],
}