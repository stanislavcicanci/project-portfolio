/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        '100': '100%',
        '145': '145%',
      },
      screens: {
        standalone: { raw: "(display-mode: standalone)" },
      },
      },
  },
  plugins: [],
}
