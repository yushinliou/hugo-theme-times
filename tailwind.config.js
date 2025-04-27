/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily:{
        sans: ['Inter', 'sans-serif'],
        merriweather: ['"Merriweather"', 'Noto Serif TC', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        georgia: ['Georgia', 'Noto Serif TC','serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              color: 'var(--tw-prose-body)',
              fontWeight: 'normal',
              fontStyle: 'normal',
            },
            p: {
              wordBreak: 'break-word',
            },
            pre: null,
            'pre code': null,
            'pre code::before': null,
            'pre code::after': null,
            code: null,
            'code::before': null,
            'code::after': null,
          },
        },
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    },
  }
}
