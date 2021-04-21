<template lang="pug">
  header.header
    .container
      AppLogo
      AppMobileMenu
      AppHeaderNav
</template>

<script>
import AppHeaderNav from '~/components/layout/HeaderNav'
import AppLogo from '~/components/Logo'
import AppMobileMenu from '~/components/layout/MobileMenu'

export default {
  name: 'AppHeader',
  components: {
    AppMobileMenu,
    AppLogo,
    AppHeaderNav
  }
}
</script>
