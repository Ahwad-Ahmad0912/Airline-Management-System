/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nova-mint': '#A8FBD3',
        'nova-teal': '#4FB7B3',
        'nova-blue': '#637AB9',
        'nova-navy': '#31326F',
      }
    },
  },
  plugins: [],
}
