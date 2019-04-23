<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-image" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: require('@/assets/images/swiper_0.jpg')
        },
        {
          id: '0002',
          imgUrl: require('@/assets/images/swiper_1.jpg')
        },
        {
          id: '0003',
          imgUrl: require('@/assets/images/swiper_2.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background: #ffffff

  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 100px
    background: #eee

    .swiper-image
      width: 100%
</style>
