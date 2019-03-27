<template>
    <dl>
        <dt><input type="checkbox" v-model="options.checked"></dt>
        <dd>
            <img :src="'./src/images/'+options.pic" alt="">
            <div class="btn">
                <button @click="dec">-</button>
                <input type="text" class="input" v-model="options.count">
                <button @click="options.count++">+</button>
            </div>
        </dd>
        <div class="content">
            <h3>{{options.title}}</h3>
            <h4>{{options.weight}}</h4>
            <p>
                <span v-for="(i,index) in options.description" :key="index">{{i}}</span>
            </p>
            <p>{{options.wei}}</p>
            <p>
                <span></span>
                <span>￥{{options.price}}</span>
            </p>
        </div>
    </dl>
</template>

<script>
export default {
    props:['options'],
    methods:{
        dec(){
            if(this.options.count>0){
                this.options.count--;
            }else{
                this.options.count=0;
            }
        }
    }
}
</script>

<style>
.list{
    width:100%;
    flex:1;
}
.list dl{
    width:100%;
    height:150px;
    border-bottom:1px solid #ccc;
    display:flex;
    padding:15px 8px;
    box-sizing: border-box;
}
.list dl dt{
    width:30px;
    height:100%;
    line-height:120px;
    text-align: center;
}
.list dl dd{
    height:150px;
    width:80px;
}
.list dl dd img{
    width:80px;
    height:90px;
}
.list dl dd .btn{
    display:flex;
}
.list dl dd .btn .input{
    width:30px;
    height:20px;
    border:1px solid #ccc;
}
.list dl dd .btn button{
    width:20px;
    height:20px;
}
.content{
    height:100%;
    flex:1;
    margin-left:10px;
}
.content p:nth-child(3){
    color:#ccc;
    font-size:13px;
    line-height:32px;
}
.content p:nth-child(4){
    font-size:13px;
}
.content p:nth-child(5){
    display:flex;
    justify-content: space-between;
    font-size:16px;
    color:red;
    font-weight:bolder;
}
</style>
