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
        "green": "#03C04A",
        "purple": "#BE00FE",
      },
    },
    boxShadow: {
      "neubrutalism": "0 2px 0 0 rgba(24, 24, 27, 1.00)",
      "neubrutalism-large": "6px 6px 0 0 rgba(24, 24, 27, 1.00)",
      "neubrutalism-medium": "4px 4px 0 0 rgba(24, 24, 27, 1.00)",
      "neubrutalism-small": "2px 2px 0 0 rgba(24, 24, 27, 1.00)",
    },
    gridTemplateColumns: {
      "skills-cols": "repeat(auto-fit, minmax(10rem, 1fr))",
      "project-cols": "repeat(auto-fill, minmax(24rem, 1fr))",
    }
  },
  plugins: [],
}
