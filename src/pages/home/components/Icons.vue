<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '0000',
          imgUrl: require('@/assets/images/index_icon_0.png'),
          desc: '景点门票0'
        },
        {
          id: '0001',
          imgUrl: require('@/assets/images/index_icon_1.png'),
          desc: '景点门票1'
        },
        {
          id: '0002',
          imgUrl: require('@/assets/images/index_icon_2.png'),
          desc: '景点门票2'
        },
        {
          id: '0003',
          imgUrl: require('@/assets/images/index_icon_3.png'),
          desc: '景点门票3'
        },
        {
          id: '0004',
          imgUrl: require('@/assets/images/index_icon_4.png'),
          desc: '景点门票4'
        },
        {
          id: '0005',
          imgUrl: require('@/assets/images/index_icon_5.png'),
          desc: '景点门票5'
        },
        {
          id: '0006',
          imgUrl: require('@/assets/images/index_icon_6.png'),
          desc: '景点门票6'
        },
        {
          id: '0007',
          imgUrl: require('@/assets/images/index_icon_7.png'),
          desc: '景点门票7'
        },
        {
          id: '0008',
          imgUrl: require('@/assets/images/index_icon_0.png'),
          desc: '景点门票8'
        },
        {
          id: '0009',
          imgUrl: require('@/assets/images/index_icon_1.png'),
          desc: '景点门票9'
        },
        {
          id: '0010',
          imgUrl: require('@/assets/images/index_icon_0.png'),
          desc: '景点门票10'
        },
        {
          id: '0011',
          imgUrl: require('@/assets/images/index_icon_1.png'),
          desc: '景点门票11'
        },
        {
          id: '0012',
          imgUrl: require('@/assets/images/index_icon_2.png'),
          desc: '景点门票12'
        },
        {
          id: '0013',
          imgUrl: require('@/assets/images/index_icon_3.png'),
          desc: '景点门票13'
        },
        {
          id: '0014',
          imgUrl: require('@/assets/images/index_icon_4.png'),
          desc: '景点门票14'
        },
        {
          id: '0015',
          imgUrl: require('@/assets/images/index_icon_5.png'),
          desc: '景点门票15'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"

  .icons >>> .swiper-container
    height 0
    padding-bottom 50%

  .icons
    margin-top .1rem
    .icon
      position relative
      width 25%
      height 0
      float left
      padding-bottom 25%
      overflow hidden
    .icon-img
      position: absolute
      top 0
      left 0
      right 0
      bottom .44rem
      text-align center

      .icon-img-content
        height 100%

    .icon-desc
      position: absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      color $darkTextColor
      text-align center
      ellipsis()

</style>
