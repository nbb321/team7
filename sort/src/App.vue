<template>
  <div id="app">
  <header-com></header-com> 
   <list-com></list-com>
   <main-com></main-com> 
   <!-- <swiperCom></swiperCom>  -->
  </div>
</template>

<script>
import HeaderCom from './components/header.vue'
import listCom from "./components/todolist.vue"
import mainCom from "./components/mainCom.vue"


// import swiperCom from "./components/swiper.vue"
export default {
  name: 'App',
  components: {
    HeaderCom,listCom,mainCom
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,body{
  width:100%;
  height:100%;
}
#app {
  width:100%;
  display:flex;
  flex-direction: column;
}
</style>
