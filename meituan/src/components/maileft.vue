<template>
    <div class="left">
        <span v-for="(item,index) in options" :key="index"  @click="bindEvent(index,item.value)" :class="{active:i==index}">{{item.name}}</span>
    </div>
</template>

<script>

//遍历对象时,参数： 第一个为值，第二个为键名，第三个为索引
export default {
    props:['options'],
    data() {
        return{
            i:0
        }
    },
    methods:{
        bindEvent(index,value) {
            this.$bus.$emit('binditem',value);
            this.i = index;
        }
    }
}
</script>

<style scoped>
.left{
    width: 20%;
    height:100%;
    display:flex;
    flex-direction: column;
    text-align:center;
    background:#ccc;
}
span{
    width: 100%;
    height:50px;
    color:#666;
    font-size:14px;
    line-height:50px;
    position: relative;
}
img{
    position: absolute;
    width: 15px;
    height: 15px;
    top:17px;
    left:5px;
}
.active{
    background:#fff;
}
</style>
