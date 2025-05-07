/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#0d6efd',
          'gray': '#444',
          'title': '#1e1e1e',
          'bg-light': '#EEE',
        },
        fontFamily: {
          'nunito': ['Nunito Sans', 'sans-serif'],
        },
        backgroundColor: {
          'overlay-dark': 'rgba(0, 0, 0, 0.3)',
          'overlay-blue': 'rgba(0, 105, 255, 0.5)',
        },
      },
    },
    plugins: [],
  }