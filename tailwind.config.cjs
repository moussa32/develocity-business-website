/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h4: ["28px", "36px"],
        h3: ["32px", "40px"],
        "4xl": ["36px", "44px"],
        "5xl": ["40px", "48px"],
        "display-sm": ["52px", "56px"],
      },
      backgroundImage: {
        'main-bg': "url('./src/assets/main-bg.svg')" ,
      }
    },
  },
  plugins: [],
};
