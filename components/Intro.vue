<template lang="pug">
  .intro
    .intro__wrapper
      .container
        .intro__content
          h1.intro__title {{getPageName}}
          p.intro__subtitle Добро пожаловать в самый морской и современный хостел Калининграда на берегу реки Преголя.
</template>

<script>
export default {
  name: 'AppIntro',
  data () {
    return {
      currentPageTitle: ''
    }
  },
  computed: {
    getPageName () {
      const routeName = this.$route.name
      switch (routeName) {
        case 'index':
          return 'HOSTEL PALMBURG – ТИХАЯ ГАВАНЬ ВДАЛИ ОТ ГОРОДСКОЙ СУЕТЫ'
        case 'about-us':
          return 'О нас'
        case 'rooms':
          return 'НОМЕРА'
        case 'services':
          return 'Услуги'
        case 'faq':
          return 'FAQ'
        case 'contacts':
          return 'Наши Контакты '
      }
      return routeName
    }
  }
}
</script>
