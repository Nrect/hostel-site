<template lang="pug">
  .accordion
    label(v-for="(tab,index) in accordionContent"  :key="index").accordion__tab.card
      input(type='radio' name='checkbox-accordion').accordion__input
      .accordion__header
        .accordion__title {{tab.title}}
        svg.accordion__icon
          use(xlink:href="#angle")
      .accordion__content
        p {{tab.description}}
</template>

<script>
export default {
  name: 'AppAccordion',
  props: {
    accordionContent: {
      type: Array,
      required: true
    }
  }
}
</script>
