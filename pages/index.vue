<template lang="pug">
  .homepage
    app-rooms-section
</template>

<script>
import AppIntro from '~/components/Intro'
import AppRoomsSection from '~/components/index/RoomsSection'

export default {
  components: {
    AppRoomsSection,
    AppIntro
  },
  layout: 'main'
}
</script>
