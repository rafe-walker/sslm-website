/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#1A1510',
        bgCard: '#2A2318',
        accent: '#7C9A3E',
        accentLight: '#9AB858',
        textPrimary: '#F5F0E8',
        textSecondary: '#B8A98E',
        accentOrange: '#D4863A',
        borderColor: '#3A3228',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
