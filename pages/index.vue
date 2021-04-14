<template lang="pug">
  .homepage
    app-rooms-section
    app-about-us
</template>

<script>
import AppIntro from '~/components/Intro'
import AppRoomsSection from '~/components/index/RoomsSection'
import AppAboutUs from '~/components/index/AboutUs'

export default {
  components: {
    AppAboutUs,
    AppRoomsSection,
    AppIntro
  },
  layout: 'main'
}
</script>
