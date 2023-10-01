/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/templates/*.{html,twig,js}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1F2039',
        'button-start': '#8E87B5',
        'button-end': '#ACAEED',
        'button-start-hover': '#6B6686',
        'button-end-hover': '#8787B9',
        'accueil-title': '#A5B4FB'
      },
      spacing: {
        '419': '28.1875rem',
        '425': '26.5625rem',


      }
    },
    fontFamily: {
      'manrope': 'Manrope, sans-serif',
      'montserrat': 'Montserrat, sans-serif',
    }
  },
  plugins: [],
}

