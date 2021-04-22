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
                    use(xlink:href="#mobile-alt")
                  a(href="tel:+79637384646") +7963 738 46 46 (вайбер, вотсап)
                .card-about__contact
                  svg.card-about__contact-icon
                    use(xlink:href="#phone")
                  a(href="tel:+74012374646") +7 (4012) 37-46-46 (городской)
                .card-about__contact
                  svg.card-about__contact-icon
                    use(xlink:href="#envelop")
                  a(href="mailto:hostelpalmburg@gmail.com") hostelpalmburg@gmail.com
                .card-about__contact
                  svg.card-about__contact-icon
                    use(xlink:href="#map-marker")
                  | Адрес : п. Прибрежное, ул. Южное полукольцо, 4
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
  }
}
</script>
