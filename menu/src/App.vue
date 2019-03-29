<template>
  <div id="app">
     <headerCom></headerCom>
     <todolistCom></todolistCom>
  </div>
</template>

<script>
import headerCom from "./components/header.vue";
import todolistCom from "./components/todolist.vue";
export default {
  name: "App",
  components:{
    headerCom,todolistCom
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,body{
  width:100%;
  height:100%;
}
#app {
  width: 100%;
  height: 100%;
  background: #eee;
  display:flex;
  flex-direction: column;
}
</style>

