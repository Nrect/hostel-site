<template lang="pug">
  .rooms_section
    .container
      .rooms_section__wrapper
        h2.rooms_section__title Каюты
        hooper(:wheel-control="false" :settings="hooperSettings").card-slider
          slide(v-for="x in 5" :key="x").card-slider__slide
            .room-card
              img.room-card__img(src="http://lamaro.like-themes.com/wp-content/uploads/2018/02/service_01-430x280.jpg")
              .room-card__title Двухместная каюта с ванной комнатой
              .room-card_description Отдельный номер для двоих с большой и удобной двуспальной кроватью, шкафом для одежды и телевизором.  В номере имеется просторный собственный сан. узел и душевая.
              button.btn Подробнее
              .room-card__swipe
          hooper-navigation(slot="hooper-addons")
</template>

<script>
export default {
  name: 'AppRoomsSection',
  data () {
    return {
      hooperSettings: {
        itemsToShow: 3,
        pagination: 'no',
        trimWhiteSpace: true
        // infiniteScroll: true
        // breakpoints: {
        //   800: {
        //     centerMode: false,
        //     itemsToShow: 3
        //   }
        // }
      }
    }
  }
}
</script>
