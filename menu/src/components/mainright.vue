<template>
<div class="mright">
    <p class="tit">无骨炸鸡双拼</p>
    <div class="title">
        <img src="../images/eat_03.gif" alt="" class="img">
        <div class="text">
            <p class="tname">蒜香半+原味半</p>
            <p class="num">9块肌肉+9块鸡肉</p>
            <p class="num">月售2 赞0</p>
            <p class="price">￥80 <button>+</button></p>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mright{
    width: 75%;
    height: 100%;
    /* background: darkkhaki; */
}
.title{
    width: 100%;
    height:150px;
     display: flex;
    flex-direction: row;
    border:1px #ccc solid;
    /* text-align: center; */
    line-height: 30px;
}
.img{
    width: 110px;
    height: 110px;
    line-height: 30px;
    margin:5px;
} 
.tname{
    font-size: 16px;
    font-weight: 800;
}
.num{
    font-size: 14px;
    color:#c6c6c6;
}
.price{
    font-size: 18px;
    color:#fd5354;
    font-weight: 800;
}
button{
    width: 30px;
    height: 30px;
    border:1px #ffb843 solid;
    border-radius: 15px;
    font-size: 24px;
    background: #ffb843;
    margin-left: 66px;
}
.tit{
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    color: slategray;
}
</style>
