<template lang="pug">
  .intro
    .rope-border
    .intro__wrapper
      .container
        .intro__content
          h1.intro__title {{getPageName}}
          p.intro__subtitle Добро пожаловать в самый морской и современный хостел Калининграда на берегу реки Преголя.
</template>

<script>
export default {
  name: 'AppIntro',
  data () {
    return {
      currentPageTitle: ''
    }
  },
  computed: {
    getPageName () {
      const routeName = this.$route.name
      switch (routeName) {
        case 'index':
          return this.$t('introTitle').index
        case 'about-us':
          return this.$t('introTitle').aboutUs
        case 'rooms':
          return this.$t('introTitle').rooms
        case 'services':
          return this.$t('introTitle').services
        case 'faq':
          return this.$t('introTitle').faq
        case 'contacts':
          return this.$t('introTitle').contacts
        default:
          return routeName
      }
    }
  }
}
</script>
