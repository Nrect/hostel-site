<template lang="pug">
  .rooms
    .container
      .wrapper
        .rooms__cards
          .rooms__cards-wrapper(v-for="(room,idx) in rooms" :key="idx")
            .rooms-card
              .rooms-card__wrapper
                .rooms-card__img
                  img(:src="room.imgSrc")
                h3.rooms-card__title {{room.title}}
                .rooms-card__description {{room.content}}
                span.rooms-card__btn.btn
                  nuxt-link(to="/") Подробнее
</template>

<script>
import { roomsData } from '~/content/rooms'

export default {
  name: 'Rooms',
  computed: {
    rooms () {
      return roomsData
    }
  }
}
</script>
