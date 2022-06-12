/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightOrange: '#FE5100',
        black: '#252422',
        veryLightGrey: '#67625C',
        lightGrey: '#5A554F',
        grey: '#4B4741',
        darkGrey: '#413D3A'
      },
      gridTemplateColumns: {
        main: '300px 1fr',
        noteContent: '1fr 45px'
      },
      gridTemplateRows: {
        main: 'max(400px, 80vh)',
        noteContent: '45px 1fr'
      }
    }
  },
  plugins: []
};
