/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightOrange: '#EB5E28',
        black: '#252422',
        veryLightGrey: '#989898',
        lightGrey: '#595550',
        grey: '#4A4742',
        darkGrey: '#403D3A'
      }
    }
  },
  plugins: []
};
