<template lang="pug">
  footer.footer
    .container
      .footer__wrapper
        .footer__logo
          AppLogo
        .footer__nav
          h3.footer__title Навигация
          ul.footer__nav-list
            li(v-for='(link,index) in links' :key="index")
              nuxt-link.footer__nav-link(:to="link.path" exact) {{link.name}}
        .footer__contacts
          h3.footer__title Контакты
          .footer__contact
            svg.footer__contact-icon
              use(xlink:href="#mobile-alt")
            a(href="tel:+79637384646") +7963 738 46 46 (вайбер, вотсап)
          .footer__contact
            svg.footer__contact-icon
              use(xlink:href="#phone")
            a(href="tel:+74012374646") +7 (4012) 37-46-46 (городской)
          .footer__contact
            svg.footer__contact-icon
              use(xlink:href="#envelop")
            a(href="mailto:hostelpalmburg@gmail.com") hostelpalmburg@gmail.com
          .footer__contact
            svg.footer__contact-icon
              use(xlink:href="#map-marker")
            p п. Прибрежное, ул. Южное полукольцо, 4
    .rope-border
    .footer__bottom-img
</template>

<script>
import AppLogo from '~/components/Logo'
import { linksNav } from '~/content/links'

export default {
  name: 'AppFooter',
  components: {
    AppLogo
  },
  computed: {
    links () {
      return linksNav
    }
  }
}
</script>
