/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
darkMode:false,
mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
