/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "mono": ["Roboto Mono", "Consolas", "monospace"],
      "sans": ["open sans", "helvetica", "arial", "sans-serif"],
    },
    screens: {
      'sm': '440px',
    },
    extend: {
      colors: {
        'text-gray': '#838383',
        'bg-gray': '#f1f1f1',
      }
    },
  },
  plugins: [],
}

