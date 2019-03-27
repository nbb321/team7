<template>
    <div class="list">
        <span>全部类目</span>
        <span>附近商家</span>
        <span>智能排序</span>
        <span>筛选</span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.list{
    width:100%;
    height:44px;
    border-bottom:1px solid #ccc;
    display:flex;
    align-items: center;
}
.list span{
    flex:1;
    display:flex;
    align-items: center;
    flex-direction: column;
    color:#000;
    font-size:14px;
}
</style>

