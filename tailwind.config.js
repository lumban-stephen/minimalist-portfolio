/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in forwards'
      },
      colors: {
        customYellow: '#FFE799',
        customBlue: '#1B263B', // Adjust the blue color as needed
      },
    },
  },
  plugins: [],
}