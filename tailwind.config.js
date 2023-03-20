/** @type {import('tailwindcss').Config} */
/*
npx tailwindcss -i ./styles/input.css -o ./styles/output.css --watch
*/
module.exports = {
  content: ["./pages/*.{html,js, jsx, tsx, ts}","./components/*.{html,js, jsx, tsx, ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
}