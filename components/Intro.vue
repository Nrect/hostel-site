<template lang="pug">
  .intro(:class="getIntroCss")
    .rope-border
    .intro__wrapper
      .container
        .intro__content
          h1.intro__title {{ getPageName }}
          p.intro__slug {{ this.$t('introTitle').indexSlug }}
          p.intro__subtitle {{ this.$t('introTitle').subtitle }}
        .intro__footer
          span.intro__btn.btn.btn--secondary
            button(@click="toggleBookingModal") {{ this.$t('common').booking }}
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AppIntro',
  data () {
    return {
      currentPageTitle: ''
    }
  },
  computed: {
    getPageName () {
      let routeName = ''
      try {
        routeName = this.$route.name.slice(0, -5)
      } catch (e) {
        return 'An error occurred'
      }
      const routeParam = this.$route.params.id
      switch (routeName) {
        case 'index':
          return this.$t('introTitle.index')
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
    },
    getIntroCss () {
      return this.$route.name.slice(0, -5) === 'index' ? 'intro--main' : ''
    }
  },
  methods: {
    getRoomName (param) {
      switch (param) {
        case 'two-room':
          return 'ДВУХМЕСТНая Каюта «СТАНДАРТ'
        case 'six-room':
          return 'ОБЩая 6 - МЕСТНая каюта'
        case 'eight-room':
          return 'ЖЕНСКая 8 - МЕСТНая каюта'
        case 'ten-room':
          return 'ОБЩАЯ 10 - МЕСТНая каюта'
        case 'twelve-room':
          return 'ОБЩая 12 - МЕСТНая каюта'
        default:
          return 'An error occurred'
      }
    },
    ...mapActions('layout', ['toggleBookingModal'])
  }
}
</script>
