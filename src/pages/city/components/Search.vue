<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list"
            :key="item.id" @click="handleCityClick(item.name)">
          {{item.name}}
        </li>
        <li class="search-item border-bottom"
            v-show="hasNoData">
          没有找到匹配城市
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return false
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      // 更简便的写法
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor

    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      line-height .62rem
      padding 0 .1rem
      text-align center
      border-radius .06rem
      color #666

  .search-content
    z-index 1
    position absolute
    top 1.58rem
    overflow hidden
    left 0
    right 0
    bottom 0
    background #eee

    .search-item
      line-height .62rem
      padding-left .2rem
      background #fff
      color #666
</style>
