import Vue from 'vue'
import Router from 'vue-router'
import headerTop from '@/components/headerTop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'headerTop',
      component: headerTop
    }
  ]
})
