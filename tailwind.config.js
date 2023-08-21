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
            transform: 'translateX(-20%)',
          },

          '100%': {
            transform: ' translateX(0)',
          },
        },
        rightToLeft: {
          '0%': {
            transform: 'translateX(20%)',
          },

          '100%': {
            transform: ' translateX(0)',
          },
        },
        topToBottom: {
          '0%': {
            transform: 'translateY(-20%)',
          },

          '100%': {
            transform: ' translateY(0)',
          },
        },

        leanLeft: {
          '0%': {
            transform: 'rotate(0)',
          },
          '100%': {
            transform: 'rotate(12)',
          },
        },
        leanRight: {
          '0%': {
            transform: 'rotate(0)',
          },
          '100%': {
            transform: 'rotate(12)',
          },
        },
      },
      animation: {
        leftToRight: 'leftToRight 0.5s ease-in-out',
        rightToLeft: 'rightToLeft 0.5s ease-in-out',
        topToBottom: 'topToBottom 0.5s ease-in-out',
        leanRight: 'leanRight 0.5s ease-in-out',
        leanLeft: 'leanLeft 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
