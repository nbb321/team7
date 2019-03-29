<template>
  <div class="one">
    <!-- 调用左边的组件 -->
   <div class="center">
        <leftCom class="left-bar"></leftCom>
        <rightCom class="right-bar"></rightCom>
   </div>
    <!-- 调用左边的组件 -->
  </div>
</template>
 
<script>
import leftCom from "./left.vue"
import rightCom from "./right.vue"
export default {
   components:{
       leftCom,rightCom
   }
}
</script>

<style>
.one{
    width:100%;
    flex:1;
    overflow-y: scroll;
}
.center{
    width:100%;
    display:flex;
    justify-content: space-around;
}
.left-bar{
   width:10%;
   height:100%;
}
.right-bar{
    width:90%;
    height:100%;
}
</style>
