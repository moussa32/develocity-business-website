/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        black: "#070707",
        secoandry: "#7b7b7b",
      },
    },
  },
  plugins: [],
};
