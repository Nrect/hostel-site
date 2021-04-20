<template lang="pug">
  .services
    .container
      .wrapper
        h2.title Бесплатные услуги
        app-services-cards
        h2.title Платные услуги
        app-services-cards

</template>

<script>
import AppServicesCards from '~/components/services/ServicesCards'

export default {
  name: 'Services',
  components: { AppServicesCards }
}
</script>
