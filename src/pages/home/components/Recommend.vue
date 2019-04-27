<template>
  <div>
    <div class="title">推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img"
             :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0000',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
          title: '八达岭长城',
          desc: '不到长城非好汉'
        },
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
          title: '八达岭长城',
          desc: '不到长城非好汉'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
          title: '八达岭长城',
          desc: '不到长城非好汉'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
          title: '八达岭长城',
          desc: '不到长城非好汉'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
          title: '八达岭长城',
          desc: '不到长城非好汉'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styl"

  .title
    line-height .8rem
    background #eee
    text-indent .2rem
    margin-top .2rem

  .item
    display flex
    overflow hidden
    height 1.9rem

    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
      border-radius 0.2rem

    .item-info
      flex 1
      padding .1rem
      min-width 0

    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()

    .item-desc
      line-height .4rem
      color #666
      ellipsis()

    .item-button
      line-height .44rem
      margin-top .2rem
      background #ff9300
      padding 0 .2rem
      border-radius .06rem
      color #fff
</style>
