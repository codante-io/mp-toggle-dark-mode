/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        test: 'linear-gradient(120deg, rgba(255,255,255,0.05) 0%, rgba(255,0,253,0.05) 25%, rgba(0,0,255,0.05) 50%, rgba(255,0,245,0.05) 75%, rgba(255,237,244,0.05) 100%)',
      },
    },
  },
  plugins: [],
}
