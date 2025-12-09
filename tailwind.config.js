/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff3131",   // bright red
        secondary: "#fdf1df", // light orange
      },
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
      },
    },
  },
  plugins: [],
};
