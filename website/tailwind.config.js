/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": "Montserrat, sans-serif",
      },
      colors: {
        "dark-blue": "#1747E7",
        "cyan": "#00C6AD",
        "bright-orange": "#F75B2B",
        "gold": "#FDBE11",
        "bright-pink": "#FF90E8",
        "light-blue": "#0FB2F9",
      },
    },
    boxShadow: {
      "neubrutalism": "0 2px 0 0 rgba(24, 24, 27, 1.00)",
    },
  },
  plugins: [],
}
