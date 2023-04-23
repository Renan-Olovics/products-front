/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto: ['--font-Roboto', 'sans-serif'],
      },
      colors: {
        'primary-background': '#2A2331',
        'dark-purple-800': '#120A19',
      },
      fontSize: {
        '2xs': '0.5rem',
      },
      lineHeight: {
        'extra-loose': '2.5',
      },
    },
  },
  plugins: [],
}
