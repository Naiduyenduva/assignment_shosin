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
        '139': '139px',
        '204': '204px',
        '242' : '242px',
        '283' : '283px',
        '312': '312px',
        '334': '334px',
        '364': '364px',
        '427' : '427px',
        '640': '640px'
      },
      height : {
        '38': '38px',
        '62': '62px',
        '78' : '78px',
        '130': '130px',
        '196': '196px',
        '258' : '258px',
        '334': '334px',
        '424': '424px'
      },
      fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        logocolor: '#0A337A',
        customwhite: '#FFFFFF',
        customwhite2 : '#FAFAFA',
        custombg1: '#FFEFE7',
        textcolor1: '#FF5151',
        custombg2: '#E8F0FB',
        textcolor2: '#3786F1',
        custombg3: '#FDEBF9',
        textcolor3: '#EE61CF',
        customBorder: '#E0E0E0',
        recentActivitybg : '#161E54',
        recentActivitybg2 : '#1B204A',
        activityButton: '#FF5151',
        customfontcolor : '#686868',
        customfontcolor2: '#161E54',
        card2text: '#161E54',
        card2text2: '#686868',
        endtitles: '#FF5151',
        namecolor: '#161E54'
      },
    },
  },
  plugins: [],
}