<template>
  <div id="app">
      <headercom></headercom>
      <sortcom @sortEvent="add"></sortcom>
      <mainbody></mainbody>
      <footercom></footercom>
    <router-view/>
  </div>
</template>

<script>
import headercom from './components/headerCom'
import mainbody from './components/mainbody'
import footercom from './components/footerCom'
import sortcom from './components/sortCom'
export default {
  name: 'App',
  components:{
    headercom,
    footercom,
    mainbody,
    sortcom
  },
  methods:{
    add(id){
      console.log(id)
    }
  },

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
}
#app{
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
}
</style>
