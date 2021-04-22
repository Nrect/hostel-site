<template lang="pug">
  .intro
    .rope-border
    .intro__wrapper
      .container
        .intro__content
          h1.intro__title {{ getPageName}}
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
      const routeName = this.$route.name.slice(0, -5)
      const routeParam = this.$route.params.id
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
        case 'rooms-id':
          return this.getRoomName(routeParam)
        default:
          return routeName
      }
    }
  },
  methods: {
    getRoomName (param) {
      switch (param) {
        case 'two-room':
          return 'Двухместная каюта '
        case 'six-room':
          return '6 - местная каюта для женщин'
        case 'eight-room':
          return 'Двуместная комната'
        case 'ten-room':
          return '10 - местная каюта для мужчин и женщин1'
        case 'twelve-room':
          return '12 - местная каюта для мужчин и женщин '
      }
    }
  }
}
</script>
