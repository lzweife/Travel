<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .header
    line-height: $headerHeight
    display: flex
    background: $bgColor;
    color: #ffffff

    .header-left
      width: .64rem
      float: left

      .back-icon
        text-align: center
        font-size: .4rem

    .header-input
      flex: 1
      color: #ccc
      background: #ffffff
      border-radius: 0.1rem
      margin-top .12rem
      margin-left .2rem
      line-height .64rem
      height .64rem
      padding-left: .2rem

    .header-right
      min-width: 1.04rem
      padding 0 .1rem
      float: right
      text-align: center
      color #fff

      .arrow-icon
        margin-left -.04rem
        font-size: .24rem
</style>
