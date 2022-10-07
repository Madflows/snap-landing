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
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
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