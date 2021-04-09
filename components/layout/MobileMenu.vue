<template lang="pug">
  .mobile-menu(:class="getCssMobile")
    button.mobile-menu__btn(@click="isMenuActive = !isMenuActive") mobile-btn
    nav.mobile-menu__nav
      app-logo
      button.mobile-menu__btn-close(@click="isMenuActive = !isMenuActive") close
      ul.mobile-menu__list
        li(v-for='(link,index) in links' :key="index")
          nuxt-link.mobile-menu__link(:to="link.path" exact) {{link.name}}
</template>

<script>
import { linksNav } from '~/content/links'
import AppLogo from '~/components/Logo'

export default {
  name: 'AppMobileMenu',
  components: { AppLogo },
  data () {
    return {
      isMenuActive: false
    }
  },
  computed: {
    links () {
      return linksNav
    },
    getCssMobile () {
      return {
        'mobile-menu': !this.isMenuActive,
        'mobile-menu--active': this.isMenuActive
      }
    }
  }
}
</script>
