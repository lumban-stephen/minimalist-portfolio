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
        },
        blink: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in forwards',
        blink: 'blink 1s step-end infinite'
      },
      colors: {
        customYellow: '#FFE799',
        customBlue: '#1B263B', // Adjust the blue color as needed
      },
    },
  },
  plugins: [],
}