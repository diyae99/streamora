/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#07162f',
        ink: '#10213f',
        muted: '#63718b',
        primary: '#e11d2f',
        greenCta: '#19a862',
        soft: '#f7f9fc',
      },
      boxShadow: {
        soft: '0 18px 55px rgba(7, 22, 47, 0.09)',
        lift: '0 24px 70px rgba(225, 29, 47, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(25, 168, 98, 0.22)' },
          '50%': { boxShadow: '0 0 0 12px rgba(25, 168, 98, 0)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
