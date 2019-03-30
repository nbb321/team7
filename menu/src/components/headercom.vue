<template>
    <div class="header">
        <span class="iconfont icon-angle-left one"></span>
        <input type="text" placeholder="请输入商品名">
        <span class="iconfont icon-pingfen "></span>
        <span  class="iconfont icon-gengduo-01"></span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    width: 100%;
    height: 50px;
    background:#fbfbfb;
    display: flex;
    text-align: center;
    line-height: 50px;
    justify-content: space-around;
}
input{
    width: 60%;
    height: 35px;
    margin-top:7px;
    background: #e8e8e8;
    border:1px #e8e8e8 solid;
    border-radius: 30px;
    text-align: center;
}

.iconfont{
    font-size: 30px;
    color:#5b5d5c;
}
.one{
    font-size: 40px;
}

</style>
