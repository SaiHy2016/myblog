// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css' // 使用 carbon 主题
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(MuseUI)

new Vue({
  el: '#app',
  router, 
  template: '<App/>',
  components: { App }
})
