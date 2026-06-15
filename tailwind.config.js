/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#0f6b4f',
          deep: '#0a4d39',
          dark: '#063a2b',
        },
        gold: {
          DEFAULT: '#c79a3a',
          soft: '#e3c878',
        },
        cream: '#f6f4ec',
        mint: '#eef6f0',
        ink: '#14302a',
      },
      fontFamily: {
        bn: ['"Hind Siliguri"', 'system-ui', 'sans-serif'],
        display: ['Amiri', 'Georgia', 'serif'],
        body: ['"Hind Siliguri"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(10, 77, 57, 0.25)',
        card: '0 6px 24px -10px rgba(20, 48, 42, 0.18)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease forwards',
        kenburns: 'kenburns 8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
