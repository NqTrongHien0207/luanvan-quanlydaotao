/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize:{
        7: "7px",
        8: "8px",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
        26: "26px",
        32: "32px",
        36: "36px",
        48: "48px",
      },
      screens: {
        'xs': '480px', // Định nghĩa breakpoint mới nhỏ hơn 'sm'
        'xxs': '400px', // Định nghĩa breakpoint mới nhỏ hơn 'xs'
        '2xs': '320px', // Định nghĩa breakpoint mới nhỏ hơn 'xxs'
        '3xs': '240px', // Định nghĩa breakpoint mới nhỏ hơn 'xxs'
      },
    },
  },
  plugins: [],
}

