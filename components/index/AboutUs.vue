<template lang="pug">
  .aboutUs-section
    .container
      .wrapper
        h2.title Почему именно мы
        .aboutUs-section__cards
          .aboutUs-section__card
            svg.aboutUs-section__card-icon
              use(xlink:href="#map")
            .aboutUs-section__card-title Расположение
            .aboutUs-section__card-description Мы находимся на берегу реки Преголь, в тихом и живописном месте нашего города.
          .aboutUs-section__card
            svg.aboutUs-section__card-icon
              use(xlink:href="#sofa")
            .aboutUs-section__card-title Комфорт
            .aboutUs-section__card-description В зоне отдыха Вы можете удобно расположиться в кресле-мешке при просмотре фильма (на таких площадках как IVI, OKKO, Кинопоиск) или поиграв в приставку.
          .aboutUs-section__card
            svg.aboutUs-section__card-icon
              use(xlink:href="#headset")
            .aboutUs-section__card-title Сервис
            .aboutUs-section__card-description Наша команда состоит из молодых и отзывчивых ребят готовых помочь Вам провести прекрасно время у нас в гостях.
        span.btn.btn--secondary.btn--section
          nuxt-link(to="/about-us") Показать больше
</template>

<script>
export default {
  name: 'AppAboutUs'
}
</script>
