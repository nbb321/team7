<template>
     <div class="main">
        <maileft :options="Jsonleft.menu"/>
        <mainright :options="Jsonright.data" :mine="Jsonleft.menu[0].value"/>
    </div>
</template>

<script>
import maileft from './maileft.vue'
import mainright from './mainright.vue'
import Jsonright from '../assets/mock/data.json'
import Jsonleft from '../assets/mock/menu.json'
export default {
components:{maileft,mainright},
  data() {
    return{
        Jsonleft,
        Jsonright
    }
  }
}
</script>

<style scoped>
.main{
  width: 100%;
  display:flex;
  height:100%;
}
</style>
