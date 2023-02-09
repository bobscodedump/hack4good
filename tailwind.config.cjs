/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      width: {
        450: "450px",
      },

      height: {
        350: "350px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bermuda: "#78dcca",
        mudPink: "#F5C7C1",
      },
    },
  },
  plugins: [],
};
