<template lang="pug">
  .services
    .container
      .wrapper
        h2.title {{ this.$t('serviceTypes').free }}
        app-services-cards(:services="this.$t('freeServices')")
    .quote
      .container
        .wrapper
          h2.quote__title.title {{ this.$t('quote').title1 }}
          .quote__description {{ this.$t('quote').description1 }}
    .container
      .wrapper
        h2.title {{ this.$t('serviceTypes').paid }}
        app-services-cards(:services="this.$t('paidServices')")
    .quote
      .container
        .wrapper
          h2.quote__title.title {{ this.$t('quote').title2 }}
          .quote__description {{ this.$t('quote').description2 }}

</template>

<script>
import AppServicesCards from '~/components/services/ServicesCards'

export default {
  name: 'Services',
  components: { AppServicesCards }
}
</script>
