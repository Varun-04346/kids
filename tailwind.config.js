/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#22c7b8',
          dark: '#17b5b0',
        },
        navy: '#0f172a',
        cream: '#fffdf9',
        pastel: {
          pink: '#fff1f2',
          lavender: '#f5f3ff',
          mint: '#f0fdf4',
          sky: '#f0f9ff',
          peach: '#fff7ed',
        }
      },
      fontFamily: {
        rounded: ['Fredoka', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      }
    },
  },
  plugins: [],
}
