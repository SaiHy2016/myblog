<template>
  <div class='container'>

    <router-link to="hy" tag="p" class="title">
        {{msg}}
    </router-link>
    <div class="tags">
        <router-link to="sportSignIn" class="spi">跑步签到</router-link>
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
    padding .2em;
  }
  .tags{
      position absolute
      top:50%;
      left 50%;
      transform translate(-50%,-50%)
      opacity 0
      animation showTags 2s linear forwards
  }
  .container{
      position absolute
      left 0
      right 0
      top:0
      bottom 0
      text-align:center;
      transform translate3d(0,0,0)
      font-size:20px
      background url('../assets/bg1.jpg') no-repeat
      animation bgmove 13s linear infinite alternate
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
        animation flyIn 2s ease-in forwards ,scale 10s linear 4s infinite alternate
    }
    @keyframes bgmove{
        0%{
          background-position left
        }
        100%{
            background-position right
        }
    }
    @-webkit-keyframes bgmove{
        0%{
          background-position 0px
        }
        100%{
            background-position 1000px
        }
    }
    @keyframes  flyIn{
       0%{
           top 26%
           opacity 0
       }
        100%{
            top 33%
            opacity .9
        }
    }
    @keyframes scale {
        0%,100%{
            font-size 1em
            opacity 1
        }
        50%{
            font-size 1.2em
            opacity .6
        }
    }
    @-webkit-keyframes scale {
        0%,100%{
            font-size 1em
            opacity 1
        }
        50%{
            font-size 1.2em
            opacity .6
        }
    }
    @keyframes showTags {
        0%{
            margin-top 20px;
            opacity 0
        }
        100%{
            margin-top 0
            opacity 1
        }
    }
</style>
