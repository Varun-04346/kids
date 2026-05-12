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
          light: '#1ab2c0', // Exact teal from image
          dark: '#1696a2',  // Matching dark teal for gradients
        },
        navy: '#1a2b4b',    // Exact deep navy from image
        cream: '#fffdf9',
        accent: {
          yellow: '#ffcc33',
          orange: '#ff7e33',
          pink: '#f46299', // New Pink
          purple: '#7a5ac9', // New Purple
        },
        pastel: {
          pink: '#fff1f2',
          lavender: '#f5f3ff',
          mint: '#f0fdf4',
          sky: '#f0f9ff',
          peach: '#fff7ed',
          purple: '#f3f0ff',
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
