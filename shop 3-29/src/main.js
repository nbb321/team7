// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.prototype.$bus = new Vue()
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(vueSwiper)
Vue.component('my-search',{
   template: "<div class='search'><span><</span><span><input type='text' placeholder='请输入商品名字'></span><span></span></div>"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
