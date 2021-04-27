<template lang="pug">
  .wrapper
    .card-about
      hooper(ref="carousel" :settings="hooperSettings").card-about__slider
        slide.card-about__slide(v-for="(img,i) in aboutImages" :key="i")
          .card-about__img
            picture
              source(type="image/webp" :srcSet="img.webp.srcSet")
              source(type="image/avif" :srcSet="img.avif.srcSet")
              source(type="image/jpeg" :srcSet="img.jpg.srcSet")
              img(:src="img.jpg.src")
        hooper-navigation(slot="hooper-addons")
        hooper-pagination(slot="hooper-addons")
      .card-about__wrapper
        h2.card-about__title HOSTEL PALMBURG – ТИХАЯ ГАВАНЬ ВДАЛИ ОТ ГОРОДСКОЙ СУЕТЫ
        .card-about__content
          p.card-about__text Добро пожаловать в самый морской и современный хостел Калининграда на берегу реки Преголя.
          p.card-about__text Мы - команда Hostel Palmburg!
          p.card-about__text У нас вы отдохнете от «бетонных джунглей». Чистый воздух и тишина пригорода встретят Вас, если Вы решите стать нашим гостем. Мы уже подумали о Вас заранее, поэтому Вы будете чувствовать себя как дома. Городская суета, шум и гам или дивные закаты у воды на фоне яхт? Выбор остаётся только за Вами.
        h2.card-about__title ПОЧЕМУ ИМЕННО МЫ?
        .card-about__content(v-for="(advantage,idx) in advantages" :key="idx")
          h3.card-about__text-title {{advantage.title}}
          p.card-about__text {{advantage.description}}
</template>

<script>
export default {
  name: 'AppAboutUsCard',
  data () {
    return {
      aboutImages: [
        // require('@/assets/images/about-us/1.jpg'),
        // require('@/assets/images/about-us/2.jpg'),
        // require('@/assets/images/about-us/3.jpg'),
        // require('@/assets/images/about-us/4.jpg'),
        // require('@/assets/images/about-us/5.jpg'),
        // require('@/assets/images/about-us/6.jpg'),
        // require('@/assets/images/about-us/7.jpg'),
        // require('@/assets/images/about-us/8.jpg'),
        // require('@/assets/images/about-us/9.jpg')
        {
          jpg: require('@/assets/images/about-us/1.jpg?resize'),
          webp: require('@/assets/images/about-us/1.jpg?resize&format=webp'),
          avif: require('@/assets/images/about-us/1.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/about-us/2.jpg?resize'),
          webp: require('@/assets/images/about-us/2.jpg?resize&format=webp'),
          avif: require('@/assets/images/about-us/2.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/about-us/3.jpg?resize'),
          webp: require('@/assets/images/about-us/3.jpg?resize&format=webp'),
          avif: require('@/assets/images/about-us/3.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/about-us/4.jpg?resize'),
          webp: require('@/assets/images/about-us/4.jpg?resize&format=webp'),
          avif: require('@/assets/images/about-us/4.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/about-us/5.jpg?resize'),
          webp: require('@/assets/images/about-us/5.jpg?resize&format=webp'),
          avif: require('@/assets/images/about-us/5.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/about-us/6.jpg?resize'),
          webp: require('@/assets/images/about-us/6.jpg?resize&format=webp'),
          avif: require('@/assets/images/about-us/6.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/about-us/7.jpg?resize'),
          webp: require('@/assets/images/about-us/7.jpg?resize&format=webp'),
          avif: require('@/assets/images/about-us/7.jpg?resize&f1ormat=avif')
        },
        {
          jpg: require('@/assets/images/about-us/8.jpg?resize'),
          webp: require('@/assets/images/about-us/8.jpg?resize&format=webp'),
          avif: require('@/assets/images/about-us/8.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/about-us/9.jpg?resize'),
          webp: require('@/assets/images/about-us/9.jpg?resize&format=webp'),
          avif: require('@/assets/images/about-us/9.jpg?resize&format=avif')
        }
      ],
      advantages: [
        {
          title: '1. Расположение',
          description: 'Название «Пальмбург» (с нем. — «Пальмовый город») происходит от названия имения с сельскохозяйственным производством, располагавшегося рядом с мостом. Владелец имения выращивал в оранжереях экзотические растения, среди которых были и пальмы. Мы находимся на берегу реки Преголь, в тихом и живописном месте нашего города. На территории располагается рыбный ресторан «Шкипер» и яхт-клуб «Marina Palmburg». В 50 м от нас располагается автобусная остановка.'
        },
        {
          title: '2. Комфорт',
          description: 'Интерьер выполнен в морском стиле: двери с иллюминатором, шторы в тельняшку, светильники в виде чайки, стены расписаны рисунками на соответствующую тематику и т.д. В зоне отдыха Вы можете удобно расположиться в кресле-мешке при просмотре фильма (на таких площадках как IVI, OKKO, Кинопоиск) или поиграв в приставку. Во всех номерах имеются индивидуальные шкафчики с замками для одежды и отдельно для чемоданов. В кроватях имеются розетки, ночник, полочка и вешалка для одежды. Кухня оборудована полностью для приготовления вкусных блюд. Так же имеется стиральная и сушильная машины, чтобы Вы могли путешествовать налегке. На улице можно воспользоваться беседкой с мангалом. Для детей у нас есть детская площадка и красивый газон для игр в теплое время года.'
        },
        {
          title: '3. Сервис',
          description: 'Наша команда состоит из молодых и отзывчивых ребят готовых помочь Вам провести прекрасно время у нас в гостях. Организовать экскурсию, трансфер, вечерний досуг, ответить на все интересующие Вас вопросы для нас только за счастье. У нас всегда чисто! Наши администраторы круглосуточно следят за поддержанием чистоты. Наши двери открыты для вас всегда.'
        }
      ],
      hooperSettings: {
        wheelControl: false
      }
    }
  },
  mounted () {
    const svg = document.getElementsByClassName('icon')
    for (let i = 0; i < svg.length; i++) {
      svg[i].removeAttribute('width')
      svg[i].removeAttribute('height')
      svg[i].getElementsByTagName('path')[0].remove()
    }
  }
}
</script>
