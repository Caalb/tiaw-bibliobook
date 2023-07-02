import colors from 'vuetify/es5/util/colors';

export default {
  env: { API_KEY: process.env.API_KEY},
  ssr: false,
  head: {
    titleTemplate: '%s',
    title: 'BB',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  },

  css: [],

  plugins: [
    {src: '~/plugins/vueTyper.client.js', mode: 'client'},
    '~/plugins/axios',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#1C1C1C',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: '#161616',
        },

        light: {
          primary: '#7CADAA',
          secondary: '#8bc34a',
          accent: '#3f51b5',
          error: '#e91e63',
          warning: '#ffeb3b',
          info: '#2196f3',
          success: '#4caf50',
        },
      },
    },
  },

  build: {},
};
