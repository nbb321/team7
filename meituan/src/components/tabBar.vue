<template>
    <div class="tab">
        <span v-for="(item,index) in options" :class="{active:i==index}" :key="index" @click="btn(index)">{{item.name}}</span>
        <b>好友拼单</b>
    </div>
</template>

<script>
export default {
    props:['options'],
    data() {
        return{
            i:null
        }
    },
    methods:{
        btn(index) {
            this.$emit('bindbtn',index)
            this.i = index;
        }
    }
}
</script>

<style scoped>
.tab{
    width: 100%;
    height:50px;
    line-height:50px;
    border-bottom:2px solid #ccc;
}
span{
    display: inline-block;
    width:20%;
    font-size:16px;
    color:#666;
    padding-left:20px;
}
b{
    width:50px;
    height:20px;
    border:1px solid #f90;
    border-radius:10px;
    font-size:14px;
    padding:5px;
    color:#f90;
    margin-left:50px;
}
.active{
    color:#000;
    font-weight:800;
}
</style>
