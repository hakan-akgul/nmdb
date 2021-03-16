const width = require('./config/tailwind/width')
const spacing = require('./config/tailwind/spacing')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans']
      },
      container: {
        center: true
      },

      // svg fill için
      fill: theme => ({
        red: theme('colors.red')
      }),
      width,
      spacing
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(10px)'
    }
  },
  variants: {
    extend: {
    }
  },
  plugins: [
    require('tailwindcss-debug-screens')
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
