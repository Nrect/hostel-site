<template lang="pug">
  .rooms_section
    .container
      .wrapper.wrapper--slider
        h2.title Каюты
        .card-slider
          hooper(:wheel-control="false" ref="carousel" :settings="hooperSettings")
            slide(v-for="(room,idx) in rooms" :key="idx").card-slider__slide
              .room-card
                .room-card__wrapper
                  .room-card__img
                    img(:src="room.imgSrc")
                  h3.room-card__title {{room.title}}
                  .room-card__description {{room.content}}
                  span.room-card__btn.btn
                    nuxt-link(:to="'/rooms/'+ room.slug" ) Подробнее
        .card-slider__buttons
          button(@click.prevent="slidePrev").card-slider__btn
            span <
          button(@click.prevent="slideNext").card-slider__btn
            span >

</template>

<script>
import { roomsData } from '~/content/rooms'

export default {
  name: 'AppRoomsSection',
  data () {
    return {
      roomCards: [],
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
  computed: {
    rooms () {
      return roomsData
    }
  },
  methods: {
    slidePrev () {
      this.$refs.carousel.slidePrev()
    },
    slideNext () {
      this.$refs.carousel.slideNext()
    }
  }
}
</script>
