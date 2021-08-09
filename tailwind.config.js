module.exports = {
  //mode: process.env.NODE_ENV && 'jit',
  //mode: process.env.NODE_ENV ? 'jit' : undefined,
  mode: '', // Just-In-Time Compiler
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: ['10px', '12px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    screens: {
      'sm': {'min': '375px'},
      'md': {'min': '768px'},
      'lg': {'min': '1320px'},
    },
    fontFamily: {
      'GothamProRegular': ['"GothamProRegular"'],
      'GothamProMedium': ['"GothamProMedium"'],
      'GothamProLight': ['"GothamProLight"'],
      'GothamProBold': ['"GothamProBold"'],
      'GothamProBlack': ['"GothamProBlack"']
    },
  }
}
