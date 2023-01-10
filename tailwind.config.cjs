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
      fontFamily: {
        PolySans: ["PolySans", "sans-serif"],
        sans: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      backgroundImage: {
        "main-bg": "url('./src/assets/main-bg.svg')",
      },
    },
  },
  plugins: [],
};
