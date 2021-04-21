<template lang="pug">
  .about-us
    .container
      .wrapper
        app-about-us-card

</template>

<script>
import AppAboutUsCard from '~/components/about-us/AboutUsCard'

export default {
  name: 'AboutUs',
  components: { AppAboutUsCard }
}
</script>
