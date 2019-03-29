<template>
 <div class="header">
      <span class="iconfont icon-xiangzuo"></span>
      <input type="text" placeholder="输入商家名.品类或商圈" @keyup.enter="$bus.$emit('searchEvent',$event.target.value)">
      <span class="iconfont icon-geren"></span>
    </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  width:100%;
  height:50px;
  line-height:50px;
  display:flex;
  justify-content: space-around;
  align-items: center;
  text-align:center;
  background:#eee;
}
.header>input{
  width:60%;
  height:40px;
  border-radius:10px;
  border:none;
  text-indent:2em;

}
.header>span{
  width:20%;
  font-size:20px;
  color:green;
}
</style>
