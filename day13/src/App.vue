<template>
  <div id="app">
    <headerCom></headerCom>
    <mainCom></mainCom>
  </div>
</template>

<script>
import headerCom from "./components/header"
import mainCom from "./components/mainCom"
import toList from "./components/tolist"
export default {
  name: "App",
  components: {
    headerCom,mainCom,toList
  }
};
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
#app{
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
}

</style>
