<template lang="pug">
  .services
    .container
      .wrapper
        h2.title Бесплатные услуги
        app-services-cards
    .quote
      .container
        .wrapper
          h2.quote__title.title HOSTEL PALMBURG – ТИХАЯ ГАВАНЬ ВДАЛИ ОТ ГОРОДСКОЙ СУЕТЫ
          .quote__description У нас вы отдохнете от «бетонных джунглей». Чистый воздух и тишина пригорода встретят Вас, если Вы решите стать нашим гостем. Мы уже подумали о Вас заранее, поэтому Вы будете чувствовать себя как дома. Городская суета, шум и гам или дивные закаты у воды на фоне яхт? Выбор остаётся только за Вами.
    .container
      .wrapper
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
