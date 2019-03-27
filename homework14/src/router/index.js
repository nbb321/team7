import Vue from 'vue'
import Router from 'vue-router'
import firstcom from '@/components/firstcom.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'firstcom',
        component: firstcom
    }]
})