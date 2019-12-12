module.exports = {
  plugins: [],
  theme: {
    extend: {
      colors: {
        accent: '#1abc9c',
        'accent-dark': '#01a383',
        'accent-light': '#34d6b6',
        grey: '#f6f7f8',
        modal: 'rgba(0, 0, 0, 0.5)',
        primary: '#2c3e50',
        'primary-dark': '#132537',
        'primary-light': '#46586a'
      },
      fontFamily: {
        sans: [
          'Inter var',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji'
        ]
      },
      maxHeight: {
        almost: '90%',
        reply: '10rem'
      },
      maxWidth: {
        almost: '90%',
        'post-list': '40rem'
      },
      width: {
        header: 'calc(100% - 4rem)'
      }
    }
  },
  variants: {
    borderWidth: ['responsive', 'first'],
    margin: ['responsive', 'first', 'last']
  }
}
