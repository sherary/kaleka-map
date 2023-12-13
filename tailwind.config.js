/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        tertiary: "#F8BE1A",
      },
      width: {
        "logo": '12rem',
        "banner": '90vw',
        "logo-sm": '10rem',
      },
      height: {
        "logo": '5.5rem',
        "banner": '8rem',
        "logo-sm": '5rem',
      },
      spacing: {
        '1': '1rem',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

