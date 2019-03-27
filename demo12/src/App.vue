<template>
  <div id="app">
      <headercom></headercom>
      <mainbody></mainbody>
      <footercom></footercom>
    <router-view/>
  </div>
</template>

<script>
import headercom from './components/headerCom'
import mainbody from './components/mainbody'
import footercom from './components/footerCom'
export default {
  name: 'App',
  components:{
    headercom,
    footercom,
    mainbody
  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
html,body{
  width:100%;
  height: 100%;
  overflow: hidden;
}
#app {
 width: 100%;
 height: 100%;
 display: flex;
 /* background: green; */
 flex-direction: column;
}
</style>
