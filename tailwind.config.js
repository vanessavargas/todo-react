/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'principal-color': '#48466D',
        'medium-color': '#3D84A8',
        'light-color': '#ABEDD8',
      },
    }
  },
}

