/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#5d3c81',
        primarysaffron: '#e73725',
        secondaryprimary: '#010000',
        secondary: '#c7a7eb',
        tertiary: '#010000',
        fourth: '#fff',
      },
      keyframes: {
        leftToRight: {
          '0%': {
            transform: 'translateX(-100%)',
          },

          '100%': {
            transform: ' translateX(0)',
          },
        },
        rightToLeft: {
          '0%': {
            transform: 'translateX(100%)',
          },

          '100%': {
            transform: ' translateX(0)',
          },
        },
        topToBottom: {
          '0%': {
            transform: 'translateY(-100%)',
          },

          '100%': {
            transform: ' translateY(0)',
          },
        },
      },
      animation: {
        leftToRight: 'leftToRight 10s ease-in-out',
        rightToLeft: 'rightToLeft 1s ease-in-out',
        topToBottom: 'topToBottom 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
