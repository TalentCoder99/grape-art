module.exports = {
  content: [
    './{components,pages}/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@dialectlabs/react-ui/**/*.{js,ts,jsx,tsx}', // In development taking into account workspace files too
    '../../packages/dialect-react-ui-jet/**/*.{js,ts,jsx,tsx}', // In development taking into account workspace files too
  ],
  theme: {
    fontFamily: {
      display: ['Lato, sans-serif'],
      body: ['Lato, sans-serif'],
      sans: ['Helvetica Neue, sans-serif'],
      poppins: ['Poppins, sans-serif'],
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      120: '120px',
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      night: '#252525',
    }),
  },
  variants: {
    extend: {
      cursor: ['hover', 'focus', 'disabled'],
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [],
};
