import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({
  app,
  store
}) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      ru: require('~/static/locales/ru.json'),
      en: require('~/static/locales/en.json')
    },
    parsePages: false,
    pages: {
      about: {
        en: '/about-us',
        ru: '/a-propos'
      }
    }
  })
}
