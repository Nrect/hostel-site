<template lang="pug">
  nav.header-nav
    .header-nav__wrapper
      ul.header-nav__list
        li(v-for='(link,index) in links' :key="index")
          nuxt-link.header-nav__link(:to="link.path" exact) {{link.name}}
      .header-nav__i18n
        nuxt-link.header-nav__i18n-btn(@click.native="changeLanguage('ru')" :to="switchLocalePath('ru')") РУС
        |  |
        nuxt-link.header-nav__i18n-btn(@click.native="changeLanguage('en')" :to="switchLocalePath('en')") ENG
</template>

<script>
import { linksNav } from '~/content/links'

export default {
  name: 'AppHeaderNav',
  computed: {
    links () {
      return linksNav
    }
  },
  methods: {
    changeLanguage (lang) {
      this.$i18n.setLocale(lang)
    }
  }
}
</script>
