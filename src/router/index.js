import Vue from 'vue'
import Router from 'vue-router'
import mbHome from '@/pages/mbHome'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mbHome',
      component: mbHome
    }
  ]
})
