<template lang="pug">
  .accordion
    label(v-for="tab in 5" :key="tab").accordion__tab.card
      input(type='radio' name='checkbox-accordion').accordion__input
      .accordion__header
        .accordion__title Выдаете ли вы постельное белье и полотенца?
        svg.accordion__icon
          use(xlink:href="#angle")
      .accordion__content
        p Постельное белье и 2 полотенца для каждого гостя включены в стоимость.
</template>

<script>
export default {
  name: 'AppAccordion'
}
</script>
