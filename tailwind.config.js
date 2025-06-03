/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kurdish: ['Noto Sans Arabic', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e0f7f6',
          100: '#b3ecec',
          200: '#80e0e0',
          300: '#4dd3d4',
          400: '#26c6c9',
          500: '#00b8bf',
          600: '#00a7b9',
          700: '#0092b0',
          800: '#007ea8',
          900: '#005a9b',
        },
        secondary: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00',
        },
        accent: {
          50: '#fce4ec',
          100: '#f8bbd0',
          200: '#f48fb1',
          300: '#f06292',
          400: '#ec407a',
          500: '#e91e63',
          600: '#d81b60',
          700: '#c2185b',
          800: '#ad1457',
          900: '#880e4f',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
};
