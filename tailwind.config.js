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
    extend: {},
  },
  plugins: [],
}

