<template>
  <div id="app" class="app">
    <headercom></headercom>
    <listcom></listcom>
    <div class="wrap">
      <swipercom></swipercom>
    </div>
    <div class="content">
      <leftcom :options="menuJson.menu" ></leftcom>
      <div class="right">
        <rightcom :options="dataJson.data" :menudefault="menuJson.menu[0].value"></rightcom>
      </div>
    </div>
  </div>
</template>

<script>
import headercom from "./components/headercom.vue";
import listcom from "./components/listcom.vue";
import swipercom from "./components/swipercom.vue";
import leftcom from "./components/leftcom.vue";
import rightcom from "./components/rightcom.vue";
import menuJson from "./assets/data/menu.json";
import dataJson from "./assets/data/data.json";
export default {
  name: 'App',
  data(){
    return{
      menuJson,
      dataJson
    }
   
  },
  components:{
    headercom,
    listcom,
    swipercom,
    leftcom,
    rightcom
  }
}
</script>

<style>

</style>
