<template lang="pug">
  .room-current
    .container
      .wrapper
        .card-about
          hooper(ref="carousel" :settings="hooperSettings").card-about__slider
            slide.card-about__slide(v-for="x in 3" :key="x")
              .card-about__img
                img(src="http://lamaro.like-themes.com/wp-content/uploads/2018/02/service_01-430x280.jpg")
            hooper-navigation(slot="hooper-addons")
            hooper-pagination(slot="hooper-addons")
          .card-about__wrapper
            h2.card-about__title 12 - местная каюта для мужчин и женщин с общим сан. узлом
            .card-about__content
              ul.card-about__list
                li.card-about__list-item(v-for="x in 10" :key="x")
                  span 123123 {{x}}
              p.card-about__text В номере имеется просторный собственный сан. узел и душевая.
            .card-about__buttons
              span.card-about__btn.btn
                nuxt-link(to="/rooms") Назад
              span.card-about__btn.btn.btn--secondary
                nuxt-link(to="/") Забронировать
    .other-rooms
      app-rooms-section

</template>

<script>
import { roomsData } from '~/content/rooms'
import AppRoomsSection from '~/components/index/RoomsSection'

export default {
  name: 'RoomId',
  components: { AppRoomsSection },
  // validate ({ params }) {
  //   return Boolean(categories.find(category => category.link === params.link && category.type === 'gates'))
  // },
  data () {
    return {
      hooperSettings: {
        wheelControl: false
      }
    }
  },
  computed: {
    rooms () {
      return roomsData
    }
  },
  mounted () {
    console.log(this.$route.params.id)
  }
}
</script>
