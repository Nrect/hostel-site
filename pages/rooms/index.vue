<template lang="pug">
  .rooms
    .container
      .wrapper
        .rooms__cards
          .rooms__cards-wrapper(v-for="(room,idx) in rooms" :key="idx")
            .rooms-card
              //hooper(:wheelControl="false")
              //  slide.rooms-card__img(v-for="x in room.imageSet.slice(0, 3)" :key="x")
              //    img(:src="x")
              //  hooper-navigation(slot="hooper-addons")
              //  hooper-pagination(slot="hooper-addons")
              .rooms-card__img
                img(:src="room.imgSrc")
              .rooms-card__wrapper
                h3.rooms-card__title {{room.title}}
                .rooms-card__description {{room.content}}
                .rooms-card__buttons
                  span.rooms-card__btn.btn
                    nuxt-link(:to="'/rooms/'+room.slug") Подробнее
                  span.rooms-card__btn.btn.btn--secondary
                    button(@click="toggleBookingModal") Забронировать
</template>

<script>
import { mapActions } from 'vuex'
import { roomsData } from '~/content/rooms'

export default {
  name: 'Rooms',
  computed: {
    rooms () {
      return roomsData
    }
  },
  methods: { ...mapActions('layout', ['toggleBookingModal']) }
}
</script>
