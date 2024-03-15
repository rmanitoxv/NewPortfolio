/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: "Playfair Display",
        noto: "Noto Serif",
        raleway: "Raleway",
        barlow: "Barlow",
        inter: "Inter",
      },
    },
  },
  plugins: [],
}
