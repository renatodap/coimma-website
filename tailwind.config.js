/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coimma-red': '#D90000',
        'coimma-gold': '#D4AF37',
        'coimma-dark': '#050505',
        'coimma-steel': '#2A2A2A',
      },
      fontFamily: {
        industrial: ['Anton', 'sans-serif'],
        legacy: ['Playfair Display', 'serif'],
        tech: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-out',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
