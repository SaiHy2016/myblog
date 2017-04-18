<template>
    <transition name="slide-fade"
                mode="out-in">
      <router-view></router-view>
    </transition>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>                     o8

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}

</style>
