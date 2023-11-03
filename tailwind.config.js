/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk, js, md}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
