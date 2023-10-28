/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk, js, md}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
