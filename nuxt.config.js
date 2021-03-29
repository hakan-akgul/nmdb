export default {
  target: 'static',
  ssr: false,
  generate: {
    fallback: true
  },
  head: {
    title: 'nmdb',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: [],

  plugins: [
    { src: '~/plugins/icons.js', mode: 'client' },
    { src: '~/plugins/directive.client.js', mode: 'client' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'https://api.themoviedb.org/3'
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },
  router: {
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  tailwindcss: {
    // jit: true
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },
  build: {}
}
