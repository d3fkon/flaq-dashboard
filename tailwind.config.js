/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './common/**/*.{js,ts,jsx,tsx}',
    './Layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
        'secondary': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        "login-img": "url('../public/flaq-login.png')"
      },

      boxShadow: {
        'flaq': '0px 0px 50px rgba(0, 0, 0, 0.15)',
        'ctm-inr': 'inset 0px 0px 18px -4px #ABABAB'
      },

    },
  },
  plugins: [],
}
