/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-primary': '#ff4d8d',
        'pink-glow': '#ff4d8d',
        'black-bg': '#000000',
        'black-near': '#0b0b0b',
        'gray-soft': '#b3b3b3',
      },
      fontFamily: {
        'heading': ['Inter', 'Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'pink-glow': '0 0 16px rgba(255, 77, 141, 0.25)',
        'pink-glow-lg': '0 0 24px rgba(255, 77, 141, 0.35)',
        'card-glow': '0 0 0 1px rgba(255, 77, 141, 0.2), 0 0 14px rgba(255, 77, 141, 0.12)',
      },
    },
  },
  plugins: [],
}



