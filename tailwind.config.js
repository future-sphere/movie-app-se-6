/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@bctc/components/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        THEME: colors.green,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
