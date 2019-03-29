<template>
    <div class="header">
        <span class="iconfont icon-chevron-thin-left"></span>
        <input type="text" placeholder="输入商家名、品类或商圈" @keyup.enter="$bus.$emit('inp',$event.target.value)">
        <span class="iconfont icon-wode"></span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    width: 100%;
    height:47px;
    background: #fafafa;
    flex-direction: row;
    justify-content: space-around;
    line-height: 40px;
}
.iconfont{
    font-size: 20px;
      color: #43cfc1;
}
input{
    width: 80%;
    height: 80%;
    align-items: center;
    margin-top:5px;
    border-radius: 30px;
    border: 0;
    padding-left: 50px;
    font-size: 14px;
}
</style>
