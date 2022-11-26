/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "neubrutalism": "0 2px 0 rgba(24, 24, 27, 1.00)",
      },
      boxShadow: {
        "neubrutalism": "0 2px 0 rgba(24, 24, 27, 1.00)",
      }
    },
    fontFamily: {
      "montserrat": "Montserrat, sans-serif",
    }
  },
  plugins: [],
}
