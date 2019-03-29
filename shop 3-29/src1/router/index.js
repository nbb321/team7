import Vue from 'vue'
import Router from 'vue-router'
import pagemain from '@/views/pagemain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pagemain',
      component: pagemain
    }
  ]
})
