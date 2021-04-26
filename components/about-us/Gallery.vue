<template lang="pug">
  .gallery
    .wrapper
      h2.title Галерея
      hooper.gallery__slider(ref="carousel1" :settings="hooperSettings" @slide="checkSlideOption")
        slide(v-for="(img,i) in galleryImages" :key="i").gallery__slide
          .gallery__img
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
        require('@/assets/images/gallery/1.jpg'),
        require('@/assets/images/gallery/2.jpg'),
        require('@/assets/images/gallery/3.jpg'),
        require('@/assets/images/gallery/4.jpg'),
        require('@/assets/images/gallery/5.jpg'),
        require('@/assets/images/gallery/6.jpg'),
        require('@/assets/images/gallery/7.jpg'),
        require('@/assets/images/gallery/8.jpg'),
        require('@/assets/images/gallery/9.jpg'),
        require('@/assets/images/gallery/10.jpg')
      ],
      hooperSettings: {
        pagination: 'no',
        trimWhiteSpace: true,
        wheelControl: false,
        breakpoints: {
          1590: {
            itemsToShow: 3
          },
          992: {
            itemsToShow: 2
          },
          768: {
            itemsToShow: 1
          }
        }
      }
    }
  },
  methods: {
    slidePrev () {
      this.$refs.carousel1.slidePrev()
    },
    slideNext () {
      this.$refs.carousel1.slideNext()
    },
    checkSlideOption (aboutSlide) {
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
