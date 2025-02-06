/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'sans-serif'],
      },
      colors: {
        slate: {
          850: '#1e293b',
          900: '#0f172a',
        },
        purple: {
          950: '#3b0764',
        },
      },
      boxShadow: {
        glow: '0 0 15px rgba(168,85,247,0.4)',
        'glow-lg': '0 0 30px rgba(168,85,247,0.6)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(168,85,247,0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(168,85,247,0.6)' },
        },
      },
    },
  },
  plugins: [],
};