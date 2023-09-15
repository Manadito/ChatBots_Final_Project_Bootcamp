/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        roundbold: ['Round_Bold', 'sans-serif'],
        rounditalic: ['Round_Italic', 'sans-serif'],
        roundregular: ['Round_Regular', 'sans-serif'],
        futurettex: ['FuturetteEx', 'sans-serif'],
        futurettexlo: ['FuturetteExlo', 'sans-serif'],
        roundo: ['Roundo_Regular', 'sans-serif'],
      },
      transform: {
        150: 'scale(1.5)',
      },
      backgroundImage: {
        card: "url('/img/Stevie_Card.jpg')",
        classroomOne: "url('/img/ClassroomOne.jpg')",
        classroomTwo: "url('/img/ClassroomTwo.jpg')",
      },
      keyframes: {
        fullSpin: {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        fullSpin: 'fullSpin 1.5s linear infinite',
      },
    },
  },
  plugins: [],
};
