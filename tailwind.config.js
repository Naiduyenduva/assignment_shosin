/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '52' : '52.92px',
        '204': '204px',
        '242' : '242px',
        '312': '312px',
        '364': '364px',
        '640': '640px'
      },
      height : {
        '78' : '78px',
        '130': '130px',
        '196': '196px',
        '334': '334px'
      },
      colors: {
        custombg1: '#FFEFE7',
        custombg2: '#E8F0FB',
        custombg3: '#FDEBF9',
        customBorder: '#E0E0E0'
      },
    },
  },
  plugins: [],
}