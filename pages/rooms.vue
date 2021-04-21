<template lang="pug">
  .rooms
    .container
      .wrapper
        .rooms__cards
          .rooms__cards-wrapper(v-for="(room,idx) in rooms" :key="idx")
            .rooms-card
              .rooms-card__img
                img(:src="room.imgSrc")
              .rooms-card__wrapper
                h3.rooms-card__title {{room.title}}
                .rooms-card__description {{room.content}}
                .rooms-card__buttons
                  span.rooms-card__btn.btn
                    nuxt-link(to="/") Подробнее
                  span.rooms-card__btn.btn.btn--secondary
                    nuxt-link(to="/") Забронировать
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
