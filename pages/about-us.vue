<template lang="pug">
  .about-us
    .container
      .wrapper
        app-about-us-card
      .galery
        .wrapper
          h2.title Галерея
          hooper.gallery__slider(:wheel-control="false" ref="carousel1" :settings="hooperSettings")
            slide(v-for="(room,idx) in 10" :key="idx").gallery__slide
              .gallery__img
                img(:src="'http://lamaro.like-themes.com/wp-content/uploads/2018/02/service_02-430x280.jpg'")
          .gallery__buttons
            button(@click.prevent="slidePrev").gallery__btn
              span
                svg(style="transform: rotate(180deg);")
                  use(xlink:href="#angle")
            button(@click.prevent="slideNext").gallery__btn
              span
                svg
                  use(xlink:href="#angle")

</template>

<script>
import AppAboutUsCard from '~/components/about-us/AboutUsCard'

export default {
  name: 'AboutUs',
  components: { AppAboutUsCard },
  data () {
    return {
      hooperSettings: {
        pagination: 'no',
        trimWhiteSpace: true,
        breakpoints: {
          1590: {
            itemsToShow: 3
          },
          992: {
            itemsToShow: 2
          },
          768: {
            itemsToShow: 1
          }
        }
      }
    }
  },
  methods: {
    slidePrev () {
      this.$refs.carousel1.slidePrev()
    },
    slideNext () {
      this.$refs.carousel1.slideNext()
    }
  }
}
</script>
