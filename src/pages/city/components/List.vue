<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              {{this.currentCity}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hot"
               :key="item.id"
               @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handleCityClick(innerItem.name)">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      // 更简便的写法
      this.changeCity(city)
      this.$router.push('/')
    },
    // 将mutations中的changeCity方法映射到组件中的changeCity方法
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // console.log(element)
        this.scroll.scrollToElement(element, 1000)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color #ccc

    &:after
      border-color #ccc

  .border-bottom
    &:before
      border-color #ccc

  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0

    .title
      line-height .54rem
      background #eee
      padding .06rem 0 .06rem .2rem
      color #666
      font-size .26rem

    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem

      .button-wrapper
        float left
        width 33.33%

        .button
          padding .1rem 0
          border-radius .06rem
          margin .1rem
          text-align center
          border .02rem solid #ccc

    .item-list
      .item
        line-height .76rem
        color #666
        padding-left .2rem
</style>
