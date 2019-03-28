<template>
  <header>
      <i class="iconfont icon-xiangzuo"></i>
      <input type="text" placeholder="输入商家名、品类或商圈" id="inp" @keyup.enter="$bus.$emit('searchEvent',$event.target.value)">
      <i class="iconfont icon-user"></i>
  </header>
</template>

<script>

export default {
      
}
</script>

<style scoped>
header{
  width: 100%;
  height:50px;
  line-height:50px;
  border-bottom:1px solid #ccc;
  text-align:center;
}
#inp{
  width: 50%;
  height:40px;
  padding-left:15px;
  margin:0px 20px;
  border-radius:15px;
  background:#ccc;
  font-size:12px;
}
i{
  font-size:20px;
  color:blue;
}
</style>
