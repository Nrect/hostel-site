<template lang="pug">
  .faq
    .container
      .wrapper
        h2.title FAQ
        app-accordion
        span.btn.btn--secondary.btn--section
          nuxt-link(to="/faq") Показать больше
</template>

<script>
import AppAccordion from '~/components/Accordion'

export default {
  name: 'AppFaqSection',
  components: { AppAccordion }
}
</script>
