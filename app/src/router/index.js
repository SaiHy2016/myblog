import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hy from '@/components/Hy'
import Lv from '@/components/Lv'
import Article from '@/components/hy/Article'
import resume from '@/components/hy/resume'
import books from '@/components/hy/books'
import Aboutme from '@/components/hy/Aboutme'
import sportSI from '@/components/hy/sportSignin.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
      {
      path:'/hy',
      name:'hy',
      component:Hy,
      children:[{
        path:'article',
        name:'article',
        component:Article
      },{
          path:'resume',
          name:'resume',
          component:resume
      }]
    },{
      path:'/lv',
      name:'lv',
      component:Lv
    },
      {
        path:'/sportSignin',
          name:'sportSignin',
          component:sportSI 
      }
  ]
})
