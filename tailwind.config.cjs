/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#141414",
        text: "#7b7b7b",
        black: "#070707",
        whiteText: "#FAFAFA",
        paragraph: "#A3A3A3",
      },
      backgroundImage: {
        'main-bg': "url('./src/assets/main-bg.svg')" ,
      }
    },
  },
  plugins: [],
};
