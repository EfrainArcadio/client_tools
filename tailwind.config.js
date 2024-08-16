/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ortindig: {
          700: '#9b26b6',
          800: '#761f89',
          900: '#641e71',
          950: '#40084a',
        },
        ortgray: {
          300: '#adafb3',
          400: '#84888c',
          500: '#63666a',
          600: '#5a5c60',
          700: '#4d4e51',
          800: '#434447',
          900: '#3b3c3e',
          950: '#252527',
        }
      },
    },
  },
  plugins: [],
}

