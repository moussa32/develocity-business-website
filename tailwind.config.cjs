/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "3rem",
          xl: "0",
        },
        screens: {
          xl: "1216px",
        },
      },
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
    },
  },
  plugins: [],
};
