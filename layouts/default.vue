<template lang="pug">
  div
    AppSprites
    AppHeader
    Nuxt
</template>
<script>
import AppSprites from '~/components/Sprites'
import AppHeader from '~/components/layout/Header'

export default {
  components: { AppHeader, AppSprites }
}
</script>
