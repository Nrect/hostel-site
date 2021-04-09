<template lang="pug">
  nav.header-nav
    .header-nav__wrapper
      ul.header-nav__list
        li(v-for='(link,index) in links' :key="index")
          nuxt-link.header-nav__link(:to="link.path" exact) {{link.name}}
</template>

<script>
import { linksNav } from '~/content/links'

export default {
  name: 'AppHeaderNav',
  computed: {
    links () {
      return linksNav
    }
  }
}
</script>
