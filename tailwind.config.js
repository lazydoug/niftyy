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
        opacity: {
          100: 'rgba(247, 251, 250, 0.5)',
          300: 'rgba(225, 226, 226, 0.5)',
          500: 'rgba(104, 106, 108, 0.75)',
          600: 'rgba(85, 85, 85, 0.25)',
          700: {
            50: 'rgba(32, 32, 37, 0.5)',
            75: 'rgba(32, 32, 37, 0.75)',
          },
        },
      },
      fontSize: {
        'hero-lg': [
          '104px',
          { lineHeight: '1', letterSpacing: '0em', fontWeight: '800' },
        ],
        'hero-md': [
          '96px',
          { lineHeight: '1', letterSpacing: '0em', fontWeight: '800' },
        ],
        'hero-sm': [
          '64px',
          { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'h1-lg': [
          '80px',
          { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'h1-md': [
          '64px',
          { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'h1-sm': [
          '48px',
          { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'h2-lg': [
          '64px',
          { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'h2-md': [
          '48px',
          { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'h3-lg': [
          '48px',
          { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'h3-md': [
          '40px',
          { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'h3-sm': [
          '32px',
          { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'h4-lg': [
          '32px',
          { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'h4-sm': [
          '24px',
          { lineHeight: '1.33', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'body1-lg': [
          '24px',
          { lineHeight: '1.33', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        'body1-md': [
          '20px',
          { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        'body1-sm': [
          '16px',
          { lineHeight: '1.5', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        'body2-lg': [
          '20px',
          { lineHeight: '1.6', letterSpacing: '-0.02em', fontWeight: '500' },
        ],
        'body2-b-lg': [
          '20px',
          { lineHeight: '1.6', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        'body2-md': [
          '16px',
          { lineHeight: '1.5', letterSpacing: '-0.02em', fontWeight: '500' },
        ],
        'title-lg': [
          '18px',
          { lineHeight: '2', letterSpacing: '-0.01em', fontWeight: '700' },
        ],
        'base-lg': [
          '16px',
          { lineHeight: '1.5', letterSpacing: '-0.01em', fontWeight: '700' },
        ],
        'base-m-lg': [
          '16px',
          { lineHeight: '1.5', letterSpacing: '-0.01em', fontWeight: '500' },
        ],
        'base-md': [
          '15px',
          { lineHeight: '1.6', letterSpacing: '-0.01em', fontWeight: '700' },
        ],
        'base-sm': [
          '14px',
          { lineHeight: '1.43', letterSpacing: '-0.01em', fontWeight: '700' },
        ],
        'caption-lg': [
          '14px',
          { lineHeight: '1.43', letterSpacing: '-0.02em', fontWeight: '500' },
        ],
        'caption-b-lg': [
          '14px',
          { lineHeight: '1.43', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        'button-lg': [
          '12px',
          { lineHeight: '2', letterSpacing: '0.17em', fontWeight: '800' },
        ],
      },
    },
  },
  plugins: [],
}
