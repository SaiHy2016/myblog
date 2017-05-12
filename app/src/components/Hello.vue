<template>
  <div class='container'>

    <router-link to="hy" tag="p" class="title">
        {{msg}}
    </router-link>
    <div class="tags">
        <router-link to="sportSignIn" class="spi">跑步签到</router-link>
        <router-link to="hy/article" class="spi">文章</router-link>
        <router-link to="hy/resume" class="spi">我的简历</router-link>
        <router-link to="sportSignIn" class="spi">关于我</router-link>
        <router-link to='lv' class="spi">去她那</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到SaiHy的博客'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .spi{
    border 1px solid #ff4081
    padding .5em;
    text-decoration none
    border-radius .5em
    white-space nowrap
  }
  .tags{
      position absolute
      top:50%;
      width:100%
      animation fadeInUp 1.5s
      display flex
      flex-flow row wrap
      justify-content center
      align-content center
  }
  .container{
      position absolute
      left 0
      right 0
      top:0
      bottom 0
      text-align:center;
      backface-visibility:hidden;
      transform: translate3d(0, 0, 0)
      perspective: 1000px  
      font-size:20px
      background url('../assets/bg1.jpg') no-repeat
      background-size cover
  }
  img {
      max-width:600px;
      width:90%;
      margin :60px auto 20px;
      display:block;
    }
    .title{
        color:#fefefe;
        position relative
        animation fadeInDownBig 1s
        top 30%
    }
   @keyframes fadeInDownBig {
        from {
            opacity: 0;
            transform: translate3d(0, -2000px, 0);
        }

        to {
            opacity: 1;
            transform: none;
        }
    }
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }

        to {
            opacity: 1;
            transform: none;
        }
    }
</style>
