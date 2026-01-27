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
        'pink-glow': '0 0 20px rgba(255, 77, 141, 0.5)',
        'pink-glow-lg': '0 0 30px rgba(255, 77, 141, 0.7)',
      },
    },
  },
  plugins: [],
}



