const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    boxShadow: {
      "custom-light": "0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c",
    },
    extend: {
      keyframes: {
        'fade-in-down': {
          "from": {
            transform: "translateY(-0.75rem)",
          },
          "to": {
            transform: "translateY(0rem)",
            opacity: '1'
          },
        },
        'fade-in-up': {
          "from": {
            transform: "translateY(0.76rem)",
          },
          "to": {
            transform: "translateY(0rem)",
            opacity: '1'
          }
        },
        'fade-side-right': {
          "from": {
            transform: "translate(0.76px)",
            opacity: '1',
          },
          "to": {
            transform: "translate(0)"
          }
        }
      },
      animation: {
        'fade-in-down': "fade-in-down 0.2s ease-in-out both",
        'fade-in-up': "fade-in-up 0.1s ease-in-out both",
        'fade-side-right': "fade-side-right 0.2s ease-in-out both"
      },
      borderWidth: {
        6: '6px'
      },
      fontFamily: {
        roboto: ["Roboto Slab", "serif"],
        signika: ["Signika Negative", "sans-serif"],
        source: ["Source Sans Pro", "serif"],
        oleo: ['Oleo Script Swash Caps', 'cursive']
       },
      colors: {
        green: {
          DEFAULT: '#00f260'
        },
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181d',
          300: '#16181d',
          500: '#0f1115',
          700: '#202125',
        },
        'cyan': colors.cyan,
        'emerald': colors.emerald
      }
    },
  },
  variants: {
    extend: {
      boxShadow:["dark"]
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
