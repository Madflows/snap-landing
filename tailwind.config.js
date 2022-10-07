/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
    },
    extend: {
      
      colors: {
        'mid-white': 'hsl(0, 0%, 98%)',
        'mid-gray': 'hsl(0, 0%, 41%)',
        'black': 'hsl(0, 0%, 8%)'
      }
    },
  },
  plugins: [],
}