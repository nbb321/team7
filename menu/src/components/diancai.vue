<template>
<div class="dian">
    <ul>
        <li v-for="(item,index) in tooList" :key="item.id">{{item.name}}</li>
    </ul>
</div>
</template>

<script>
export default {
data(){
    return{
        tooList:[
            {name:"点菜",id:0},
            {name:"评价",id:1},
            {name:"商家",id:2},
            {name:"好友拼单",id:3}
        ]
    }
}
}
</script>

<style scoped>
.dian{
    width: 100%;
    height: 50px;
    background: #fbfbfb;
}
ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    line-height: 50px;
}
li{
    font-size: 16px;
    color:#b7b7b7;
}
li:last-child{
    font-size: 14px;
    color: orange;
    /* border:1px orangered solid; */
    /* border-radius: 10px; */
}
</style>
