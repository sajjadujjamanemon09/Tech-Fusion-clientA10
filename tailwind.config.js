/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        proza: "'Proza Libre', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

