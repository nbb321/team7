<template>
  <div class="header">
    <span class="iconfont icon-xiangzuo"></span>
    <input type="text" placeholder="请输入商品名">
    <span class="iconfont icon-pingfen"></span>
    <span class="iconfont icon-gengduo"></span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
  width:100%;
  height:40px;
  display:flex;
  justify-content: space-around;
  align-items: center;
}

.header>input{
  width:200px;
  border:none;
  background:#ccc;
  text-align:center;
  height:30px;
  line-height:30px;
  border-radius:5px;

}
</style>
