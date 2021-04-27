export default {
  target: 'static',

  head: {
    title: 'hostel-palmburg',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  css: [
    '@/assets/stylesheets/main.scss',
    'hooper/dist/hooper.css'
  ],

  plugins: [
    '~/plugins/slider.js'],

  components: true,

  buildModules: [
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/eslint-module'
  ],

  modules: ['nuxt-i18n'],
  i18n: {
    locales: [
      {
        code: 'ru',
        file: 'ru.js'
      },
      {
        code: 'en',
        file: 'en.js'
      }
    ],
    defaultLocale: 'ru',
    lazy: true,
    langDir: 'static/locales',
    skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true
    }
  },

  build: {
    postcss: {
      preset: {
        autoprefixer: {
          overrideBrowserslist: ['last 3 versions', '> 1%']
        }
      }
    }
  },

  optimizedImages: {
    optimizeImages: true,
    responsive: {
      sizes: [540, 720, 960, 1170],
      placeholder: true,
      placeholderSize: 20
    }
  }
}
