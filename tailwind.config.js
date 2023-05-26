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
      keyframes: {
        batteries: {
          '0%': {
            backgroundImage: "url('/src/assets/batteries/battery0.svg')",
          },
          '20%': {
            backgroundImage: "url('/src/assets/batteries/battery20.svg')",
          },
          '40%': {
            backgroundImage: "url('/src/assets/batteries/battery40.svg')",
          },
          '60%': {
            backgroundImage: "url('/src/assets/batteries/battery60.svg')",
          },
          '80%': {
            backgroundImage: "url('/src/assets/batteries/battery80.svg')",
          },
          '100%': {
            backgroundImage: "url('/src/assets/batteries/battery100.svg')",
          },
        },
        users: {
          '0%': {
            backgroundImage: "url('/src/assets/users/user0.svg')",
          },
          '20%': {
            backgroundImage: "url('/src/assets/users/user20.svg')",
          },
          '40%': {
            backgroundImage: "url('/src/assets/users/user40.svg')",
          },
          '60%': {
            backgroundImage: "url('/src/assets/users/user60.svg')",
          },
          '80%': {
            backgroundImage: "url('/src/assets/users/user80.svg')",
          },
          '100%': {
            backgroundImage: "url('/src/assets/users/user100.svg')",
          },
        },
        planets: {
          '0%': {
            backgroundImage: "url('/src/assets/planets/planet0.svg')",
            transform: 'scale(2) rotate(18deg)',
          },
          '10%': {
            transform: 'scale(1.67) rotate(36deg)',
          },
          '20%': {
            backgroundImage: "url('/src/assets/planets/planet20.svg')",
            transform: 'scale(1.33) rotate(54deg)',
          },
          '30%': {
            transform: 'scale(1) rotate(72deg)',
          },
          '40%': {
            backgroundImage: "url('/src/assets/planets/planet40.svg')",
            transform: 'scale(0.67) rotate(90deg)',
          },
          '50%': {
            transform: 'scale(0.33) rotate(108deg)',
          },
          '60%': {
            backgroundImage: "url('/src/assets/planets/planet60.svg')",
            transform: 'scale(0) rotate(126deg)',
          },
          '70%': {
            transform: 'scale(0.33) rotate(144deg)',
          },
          '80%': {
            backgroundImage: "url('/src/assets/planets/planet80.svg')",
            transform: 'scale(0.67) rotate(162deg)',
          },
          '100%': {
            backgroundImage: "url('/src/assets/planets/planet100.svg')",
            transform: 'scale(1) rotate(180deg)',
          },
        },
      },
      animation: {
        battery: 'batteries 1.5s ease-in-out forwards',
        user: 'users 1.5s ease-in-out forwards',
        planet: 'planets 0.8s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
