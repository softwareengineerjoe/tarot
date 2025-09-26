/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair", "serif"],
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 100%': { opacity: '0.99' },
          '20%, 21.999%, 63%, 63.999%': { opacity: '0.4' },
        },
        floatAndColor: {
          '0%': { transform: 'translateY(0)', color: '#ffffff', letterSpacing: '0em' },
          '50%': { transform: 'translateY(-5px)', color: '#8c7464', letterSpacing: '0.05em' },
          '100%': { transform: 'translateY(0)', color: '#ffffff', letterSpacing: '0em' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        flicker: 'flicker 3s infinite',
        floatColor: 'floatAndColor 5s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease forwards',
      },
    },
  },
  plugins: [],
};
