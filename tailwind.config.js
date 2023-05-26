/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        moon: '4px 3px 0 0 white',
      },
    },
  },
  plugins: [],
}
