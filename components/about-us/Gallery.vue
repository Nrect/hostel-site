<template lang="pug">
  .gallery
    .wrapper
      h2.title {{ translate.galleryTitle }}
      hooper.gallery__slider(ref="carousel1" :settings="hooperSettings" @slide="checkSlideOption")
        slide(v-for="(img,i) in galleryImages" :key="i").gallery__slide
          .gallery__img
            picture
              source(type="image/webp" :srcSet="img.webp.srcSet")
              source(type="image/avif" :srcSet="img.avif.srcSet")
              source(type="image/jpeg" :srcSet="img.jpg.srcSet")
              img(:src="img")
      .gallery__buttons
        button(@click.prevent="slidePrev" ref="prevBtn").gallery__btn
          span
            svg(style="transform: rotate(180deg);")
              use(xlink:href="#angle")
        button(@click.prevent="slideNext" ref="nextBtn").gallery__btn
          span
            svg
              use(xlink:href="#angle")
</template>
<script>
export default {
  name: 'AppGallery',
  data () {
    return {
      galleryImages: [
        {
          jpg: require('@/assets/images/gallery/1.jpg?resize'),
          webp: require('@/assets/images/gallery/1.jpg?resize&format=webp'),
          avif: require('@/assets/images/gallery/1.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/gallery/2.jpg?resize'),
          webp: require('@/assets/images/gallery/2.jpg?resize&format=webp'),
          avif: require('@/assets/images/gallery/2.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/gallery/3.jpg?resize'),
          webp: require('@/assets/images/gallery/3.jpg?resize&format=webp'),
          avif: require('@/assets/images/gallery/3.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/gallery/4.jpg?resize'),
          webp: require('@/assets/images/gallery/4.jpg?resize&format=webp'),
          avif: require('@/assets/images/gallery/4.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/gallery/5.jpg?resize'),
          webp: require('@/assets/images/gallery/5.jpg?resize&format=webp'),
          avif: require('@/assets/images/gallery/5.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/gallery/6.jpg?resize'),
          webp: require('@/assets/images/gallery/6.jpg?resize&format=webp'),
          avif: require('@/assets/images/gallery/6.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/gallery/7.jpg?resize'),
          webp: require('@/assets/images/gallery/7.jpg?resize&format=webp'),
          avif: require('@/assets/images/gallery/7.jpg?resize&format=avif')
        },
        {
          jpg: require('@/assets/images/gallery/8.jpg?resize'),
          webp: require('@/assets/images/gallery/8.jpg?resize&format=webp'),
          avif: require('@/assets/images/gallery/8.jpg?resize&format=avif')
        }
      ],
      hooperSettings: {
        pagination: 'no',
        trimWhiteSpace: true,
        wheelControl: false,
        breakpoints: {
          1590: {
            itemsToShow: 3
          },
          1200: {
            itemsToShow: 2
          },
          1092: {
            itemsToShow: 1
          }
        }
      }
    }
  },
  computed: {
    translate () {
      return this.$t('aboutUs')
    }
  },
  methods: {
    slidePrev () {
      this.$refs.carousel1.slidePrev()
    },
    slideNext () {
      // console.log(this.$refs.carousel1.containerWidth)
      this.$refs.carousel1.slideNext()
    },
    checkSlideOption (aboutSlide) {
      // console.log(this.$refs.carousel1.containerWidth)
      const slideCount = this.galleryImages.length - 3
      const nextButton = this.$refs.nextBtn
      const prevButton = this.$refs.prevBtn
      nextButton.disabled = false
      prevButton.disabled = false
      if (aboutSlide.currentSlide === 0) {
        prevButton.disabled = true
        nextButton.disabled = false
      }
      if (aboutSlide.currentSlide === slideCount) {
        nextButton.disabled = true
        prevButton.disabled = false
      }
    }
  }

}
</script>
