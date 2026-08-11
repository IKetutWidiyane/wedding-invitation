/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Cormorant Garamond"', 'serif'],
        'body': ['"DM Sans"', 'sans-serif'],
        'script': ['"Great Vibes"', 'cursive'],
      },
      colors: {
        'ivory': '#F8F4EC',
        'warm-white': '#FFFDF8',
        'champagne': '#D8C3A5',
        'gold': '#B89B5E',
        'taupe': '#8C7A67',
        'mocha': '#5C493A',
        'dark-brown': '#302820',
        'dusty-rose': '#C99A91',
        'blush': '#E6C7C1',
        'sage': '#9CA58A',
        'olive': '#777C62',
      },
      fontSize: {
        'hero-name': ['clamp(3rem, 8vw, 6.875rem)', { lineHeight: '1.1' }],
        'section-title': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.2' }],
        'sub-heading': ['clamp(1.25rem, 2.5vw, 2rem)', { lineHeight: '1.3' }],
      },
      letterSpacing: {
        'widest-2': '0.2em',
        'widest-3': '0.3em',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-slower': 'float 8s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};