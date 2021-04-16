<template lang="pug">
  div
    AppSprites
    AppHeader
    app-intro(:class="{'intro--main' :this.$route.name === 'index'}")
    Nuxt
    app-footer
</template>
<script>
import AppSprites from '~/components/Sprites'
import AppHeader from '~/components/layout/Header'
import AppLogo from '~/components/Logo'
import AppIntro from '~/components/Intro'
import AppFooter from '~/components/layout/Footer'

export default {
  components: {
    AppFooter,
    AppIntro,
    AppLogo,
    AppHeader,
    AppSprites
  }
}
</script>
