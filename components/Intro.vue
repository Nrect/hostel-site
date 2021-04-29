<template lang="pug">
  .intro(:class="getIntroClass")
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
      const routeName = this.$route.name.slice(0, -5)
      const routeParam = this.$route.params.id
      switch (routeName) {
        case 'index':
          return this.$t('introTitle.index')
        case 'about-us':
          return this.$t('introTitle.aboutUs')
        case 'rooms':
          return this.$t('introTitle.rooms')
        case 'services':
          return this.$t('introTitle.services')
        case 'faq':
          return this.$t('introTitle.faq')
        case 'contacts':
          return this.$t('introTitle.contacts')
        case 'rooms-id':
          return this.getRoomName(routeParam)
        default:
          return routeName
      }
    },
    getIntroClass () {
      switch (this.$route.name.slice(0, -5)) {
        case 'index':
          return 'intro--main'
        case 'about-us':
          return 'intro--about'
        case 'rooms':
          return 'intro--rooms'
        case 'services':
          return 'intro--services '
        case 'faq':
          return 'intro--faq'
        case 'contacts':
          return 'intro--contacts '
        default:
          return true
      }
    }
  },
  methods: {
    getRoomName (param) {
      switch (param) {
        case 'two-room':
          return this.$t('roomsTitles.titleTwo')
        case 'six-room':
          return this.$t('roomsTitles.titleSix')
        case 'eight-room':
          return this.$t('roomsTitles.titleEight')
        case 'ten-room':
          return this.$t('roomsTitles.titleTen')
        case 'twelve-room':
          return this.$t('roomsTitles.titleTwelve')
      }
    },
    ...mapActions('layout', ['toggleBookingModal'])
  }
}
</script>
