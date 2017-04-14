// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { RadonInstall } from 'radon-ui'

Vue.config.productionTip = false

Vue.use(RadonInstall, {
    Modal: true,
    Notification: true,
    LoadingBar: true,
    Preview: true
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
