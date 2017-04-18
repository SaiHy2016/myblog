<template>
  <div class='container'>
    <img src="../assets/logo.jpg">
    <router-link to="hy" tag="p">{{msg}}</router-link>
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
  .container{
    text-align:center;
    font-size:2.6rem;
  }
  img {
      max-width:600px;
      width:90%;
      margin :60px 0 0 0;
    }
</style>
