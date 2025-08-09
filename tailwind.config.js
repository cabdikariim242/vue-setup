/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#1e293b',   // background madow
        darktext: '#f8fafc', // qoraal cad
      }
    },
  },
  plugins: [],
}
