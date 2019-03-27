<template>
    <header>
        <span class="iconfont icon-return"></span>
        <div class="input">
            <span class="iconfont icon-search"></span>
            <input type="text" placeholder="输入商品名、品类或商圈">
        </div>
        <span class="iconfont icon-wode"></span>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
    width:100%;
    height:44px;
    background:#eee;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0 10px;
    box-sizing: border-box;
}
header span.icon-return,span.icon-wode{
    font-size:25px;
    color:blue;
    font-weight:bolder;
}
header .input{
    width:280px;
    height:30px;
    background:#ccc;
    display:flex;
    align-content: center;
    padding:0 20px;
    box-sizing: border-box;
    border-radius:20px;
}
header .input input{
    width:260px;
    border:none;
    background:none;
    outline: none;
}
header .input span{
    line-height: 30px;
}
</style>
