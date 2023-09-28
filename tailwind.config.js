/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#4f46e5',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif']
      },
    },
  },
  plugins: [],
}

