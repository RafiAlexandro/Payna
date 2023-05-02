/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#1F7CFF',
        'primary-hover': '#4a8be6',
        'secondary': '#F5F6FB',
        'secondary-hover': '#afb8e2'
      },
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('current', '&.active');
  })
  ],
}

