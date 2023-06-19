/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkGray: "rgb(29,27,25)",
        veryDarkGray: "rgb(24,23,21)",
        white: "rgb(221,221,221)",
        orange: "rgb(152,119,80)",
        green: "rgb(51,99,44)",
        slate: "rgb(68,68,68)",
        darkWhite: "rgb(136,136,136)"
      },
      fontFamily: {
        sans: ['var(--font-jost)'],
        YellowTail: ['Yellowtail', "cursive"]
      }
    },
  },
  plugins: [],
}
