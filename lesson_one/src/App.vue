<template>
  <div id="app">
      <headerTop></headerTop>
      <mainmiddle></mainmiddle>
  </div>
</template>

<script>
import headerTop from './components/headerTop.vue'
import mainmiddle from './components/mainmiddle.vue'
export default {
  name: 'App',
  components:{
    headerTop,
    mainmiddle
  }
}
</script> 

<style>
@import url('./assets/scss/reset.scss');
#app {
    width: 100%;
    height:100%;
    display:flex;
    flex-direction: column;
}
</style>
