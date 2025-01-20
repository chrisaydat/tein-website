/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ndc: {
          red: '#D8232A',
          green: '#128A2C',
          white: '#FFFFFF',
          black: '#000000',
        },
        primary: '#D8232A',    // NDC Red as primary
        secondary: '#128A2C',  // NDC Green as secondary
        accent: '#000000',     // Black as accent
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
