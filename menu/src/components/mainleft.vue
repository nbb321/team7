<template>
    <div class="mleft">
        <ul class="left">
            <li v-for="(item,index) in dianList" :key='item.id'>{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dianList:[
                {name:"折扣",id:0},
                {name:"买赠",id:1},
                {name:"新品",id:2},
                {name:"无骨炸鸡类",id:3},
                {name:"折扣",id:4},
                {name:"套餐类",id:5},
                {name:"有骨炸鸡类",id:6},
            ]
        }
    }
}
</script>

<style scoped>
.mleft{
    width: 25%;
    height: 100%;
}
.left{
    width: 100%;
    /* background:palegoldenrod; */
}
.left li{
    width: 100%;
    height: 40px;
    /* border:1px #ccc solid; */
    text-align: center;
    line-height: 50px;
    color:#5d5f5e;
    font-size: 14px;
    margin-top:10px;
    background:#f5f5f5;
}
</style>
