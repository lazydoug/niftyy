/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: '#bce6ec',
          2: '#b9a9fb',
          3: '#ffa6d6',
          4: '#dbff73',
          shade1: '#6dd3c2',
          shade2: '#1966f7',
        },
        neutral: {
          100: '#f7fbfa',
          200: '#f1f4f4',
          300: '#e1e2e2',
          400: '#a6aead',
          500: '#686a6c',
          600: '#555555',
          700: '#202025',
          800: '#010101',
        },
      },
    },
  },
  plugins: [],
}
