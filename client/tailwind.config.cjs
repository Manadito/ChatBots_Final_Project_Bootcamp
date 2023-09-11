/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fullSpin: {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        fullSpin: 'fullSpin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
