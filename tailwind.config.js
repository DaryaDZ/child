/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'poppins': ['Poppins', 'sans-serif']
        'Vazirmatn' :['Vazirmatn']
      }
      ,
      spacing: {
        '97': '2rem',
        '98': '1.5rem',
        '99':'220px'
      }
    },
  },
  plugins: [],
}
