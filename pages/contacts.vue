<template lang="pug">
  .contacts
    .container
      .wrapper
        .card-about(style="margin:0 auto;max-width:1000px")
          .card-about__map
            app-google-map-section(v-if="currentMap === 'google'")
            app-yandex-map-section(v-if="currentMap === 'yandex'")
            .card-about__map-buttons
              button.card-about__map-btn(@click="currentMap = 'google'")
                img(src="@/assets/images/gmap.png")
              button.card-about__map-btn(@click="currentMap = 'yandex'")
                img(src="@/assets/images/yamap.png")
          .card-about__wrapper
            .card-about__content
              .card-about__contacts
                .card-about__contact
                  svg.card-about__contact-icon
                    use(xlink:href="#phone")
                  a(href="tel:+74012374646") {{ translate.phone }}
                .card-about__contact
                  svg.card-about__contact-icon
                    use(xlink:href="#envelop")
                  a(href="mailto:hostelpalmburg@gmail.com") hostelpalmburg@gmail.com
                .card-about__contact
                  svg.card-about__contact-icon
                    use(xlink:href="#map-marker")
                  | {{ translate.address }}
                .card-about__contact
                  a(href="viber://chat?number=%2B79637384646" target="_blank")
                    svg.card-about__contact-icon
                      use(xlink:href="#viber")
                  a(href="https://wa.me/+79637384646" target="_blank")
                    svg.card-about__contact-icon
                      use(xlink:href="#whatsapp")
                  p +7 (963) 738 46 46
</template>

<script>
import AppGoogleMapSection from '~/components/contacts/GoogleMapSection'
import AppYandexMapSection from '~/components/contacts/YandexMapSection'

export default {
  name: 'Contacts',
  components: {
    AppYandexMapSection,
    AppGoogleMapSection
  },
  data () {
    return {
      currentMap: 'google'
    }
  },
  computed: {
    translate () {
      return this.$t('common')
    }
  }
}
</script>
