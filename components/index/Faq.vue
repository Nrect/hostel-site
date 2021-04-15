<template lang="pug">
  .faq
    .container
      h2.title FAQ
      .accordion
        label(v-for="x in 5" :key="x").accordion__tab.card
          input(type='radio' name='checkbox-accordion').accordion__input
          .accordion__header Выдаете ли вы постельное белье и полотенца?
            svg.accordion__icon
              use(xlink:href="#angle")
          .accordion__content
            p Постельное белье и 2 полотенца для каждого гостя включены в стоимость.
</template>

<script>
export default {
  name: 'AppFaqSection'
}
</script>
