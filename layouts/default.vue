<template lang="pug">
  div
    AppSprites
    AppHeader
    app-intro
    Nuxt
</template>
<script>
import AppSprites from '~/components/Sprites'
import AppHeader from '~/components/layout/Header'
import AppLogo from '~/components/Logo'
import AppIntro from '~/components/Intro'

export default {
  components: {
    AppIntro,
    AppLogo,
    AppHeader,
    AppSprites
  }
}
</script>
