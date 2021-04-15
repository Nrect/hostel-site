<template lang="pug">
  .rooms_section
    .container
      .wrapper.wrapper--slider
        h2.title Каюты
        .card-slider
          hooper(:wheel-control="false" ref="carousel" :settings="hooperSettings")
            slide(v-for="x in 5" :key="x").card-slider__slide
              .room-card
                .room-card__wrapper
                  .room-card__img
                    img(src="http://lamaro.like-themes.com/wp-content/uploads/2018/02/service_01-430x280.jpg")
                  h3.room-card__title Двухместная каюта с ванной комнатой
                  .room-card__description Отдельный номер для двоих с большой и удобной двуспальной кроватью, шкафом для одежды и телевизором.  В номере имеется просторный собственный сан. узел и душевая.
                  span.room-card__btn.btn
                    nuxt-link(to="/") Подробнее
        .card-slider__buttons
          button(@click.prevent="slidePrev").card-slider__btn
            span <
          button(@click.prevent="slideNext").card-slider__btn
            span >

</template>

<script>
export default {
  name: 'AppRoomsSection',
  data () {
    return {
      hooperSettings: {
        itemsToShow: 3,
        pagination: 'no',
        trimWhiteSpace: true,
        breakpoints: {
          1500: {
            itemsToShow: 3
          },
          768: {
            itemsToShow: 2
          },
          320: {
            itemsToShow: 1
          }
        }
      }
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
