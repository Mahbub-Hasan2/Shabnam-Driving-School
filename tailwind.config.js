/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F9C527',
        'secondary': '#2D2D2C',
        'dark': '#1A1A1A',
        'light': '#F9F9F9',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}