/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    colors:{
      'nav':'#020F12',
      'principal':'#FFECEA',
      'box':'#DBD6D8',
      'box2':'#8D000B',
      'secondary':'#707070',
      'btn':'#01090b'
    },
    extend: {
      backgroundImage: {
        'avispa': "url('../app/img/IMG_6213-2.png')",
      },
      maxWidth: {
        '1/2': '50%',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

