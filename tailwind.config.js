/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        bubblegum: ['Bubblegum Sans', 'cursive'],
        tinos: ['Tinos', 'serif'],
      },
    },
  },
  // plugins: [
  //   daisyui,
  // ],
  plugins: [
  ],
}

