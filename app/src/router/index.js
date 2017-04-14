import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hy from '@/components/Hy'
import Lv from '@/components/Lv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path:'/hy',
      name:'hy',
      component:Hy,
      children:[
        {
          path:''
        }
      ]
    },{
      path:'/lv',
      name:'lv',
      component:Lv
    }
  ]
})
