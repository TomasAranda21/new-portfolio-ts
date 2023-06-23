/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        dark: {
          50: "#3F3F3F",
          150: "#424242",
          100: "#484848",
          200: "#3E3E3E", 
          300: "#2B2B2B",
          400: "#1D1D1D",
          500: "#191919",
          600: "#1A1A1A",
          700: "#0A0708",
          800: "#121212",
          900: "#0b0b0f",
        }
      },
      screens:{
        '1xl': '1480px',
        '3xl': '1920px',
        'xs': '450px',
      }
    },
  },
  plugins: [],
}
