<template>
  <header>
      <span class="iconfont icon-zuojiantou-01"></span>
      <input type="text" placeholder="请输入要查找的商品">
      <span class="iconfont icon-shoucang2"></span>
      <span class="iconfont icon-gengduo-01"></span>
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
  display:flex;
  text-align:center;
  line-height:50px
}
input{
  display: inline-block;
  width: 40%;
  margin:5px 5px;
  padding-left:20px;
  border-radius:20px;
  background:#ccc;
  border:0;
  font-size:14px;
}
span{
  flex:1;
  font-size:25px;
}
</style>
