/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '425px',   // Small screens (e.g., mobile)
      md: '768px',   // Medium screens (e.g., tablets)
      mdlg: '900px',   // Medium screens (e.g., tablets)
      lg: '1050px',  // Large screens (e.g., laptops)
      xlg: '1120px',  // Extra large screens (e.g., desktops)
      xl: '1280px',  // Extra large screens (e.g., desktops)
      '2xl': '1536px', // Double extra large screens
    },

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

