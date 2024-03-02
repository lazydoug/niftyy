/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      color: {
        accent: {
          1: 'BCE6EC',
          2: 'B9A9FB',
          3: 'FFA6D6',
          4: 'DBFF73',
          shade1: '6DD3C2',
          shade2: '1966F7',
        },
        neutral: {
          100: 'F7FBFA',
          200: 'F1F4F4',
          300: 'E1E2E2',
          400: 'A6AEAD',
          500: '686A6C',
          600: '555555',
          700: '202025',
          800: '010101',
        },
      },
    },
  },
  plugins: [],
}
