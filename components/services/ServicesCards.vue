<template lang="pug">
  .services-cards
    .services-cards__card-wrapper(v-for="x in 12" :key="x")
      .services-cards__card
        .services-cards__card-icon
          svg
            use(xlink:href="#phone")
        h3.services-cards__card-title Оригинальные сувениры
</template>

<script>
export default {
  name: 'AppServicesCards'
}
</script>
