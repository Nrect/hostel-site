<template lang="pug">
  .faq
    .container
      .wrapper
        app-accordion
</template>

<script>
import AppAccordion from '~/components/Accordion'

export default {
  name: 'Faq',
  components: { AppAccordion }
}
</script>
