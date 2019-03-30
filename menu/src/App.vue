<template>
  <div id="app">
    <headercom></headercom>
    <swiperone></swiperone>
    <diancai></diancai>
    <div class="mainbo">
       <mainleft></mainleft>
        <mainright></mainright>
    </div>
  </div>
</template>

<script>
import headercom from './components/headercom.vue'
import icon from './assets/fonts/iconfont.css'
// import mainbody from './components/mainbody.vue'
import diancai from './components/diancai.vue'
import swiperone from './components/swiperone.vue'
import mainleft from "./components/mainleft.vue"
import mainright from './components/mainright.vue'
export default {
  name: 'App',
  components:{
    headercom,
    diancai,
    swiperone,
    mainleft,
    mainright
  }
}
</script>

<style scoped>
.mainbo{
  flex:1;
  display: flex;
  /* background:aquamarine; */
}
</style>
