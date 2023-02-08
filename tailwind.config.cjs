/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      width: {
        '450': '450px',
       },

      height: {
        '350': "350px"
      }
    },
  },
  plugins: [],
};
