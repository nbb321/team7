<template>
<dl>
    <dt><img :src="options.frontImg" alt=""></dt>
    <dd>
        <div>
            <h3>{{options.name}}</h3>
            <p>
                <span>￥{{options.avgPrice}}/人</span>
                <span>{{options.areaName}}{{options.distance}}</span>
            </p>
            <p>
                <span v-for="(ite,ind) in options.smartTags" :key="ind">
                    {{ite.text.content}}
                </span>
            </p>
            <p>
                <span v-for="(item,index) in options.extraServiceTags" :key="index">
                    {{item.text.content}}
                </span>
            </p>
        </div>
        <div>
            <p v-for="(items,indexs) in options.preferentialInfo.maidan.entries" :key="indexs">
                <img :src="items.icon" alt="">
                <span>{{items.content}}</span>
            </p>
        </div>
    </dd>
</dl>
    
</template>

<script>
export default {
    props:['options']
}
</script>

<style>
*{
    padding:0;
    margin:0;
}

dl{
    width:100%;
    height:200px;
    border-bottom:1px solid #ccc;
    display:flex;
    padding:10px 10px;
    box-sizing: border-box;
    font-size:14px;
}
dl dt{
    width:100px;
    height:100px;
}
dl dt img{
    width:100%;
    height:100%;
}
dl dd{
    height:100%;
    flex:1;
    margin-left:5px;
}
dl dd div:nth-child(1){
    width:100%;
    height:100px;
    border-bottom:1px solid #ccc;
}
dl dd div:nth-child(1) h3{
    font-size:14px;
}
dl dd div:nth-child(1) p:nth-child(2){
    font-size:13px;
    color:rgb(59, 56, 56);
}
dl dd div:nth-child(1) p:nth-child(3){
    font-size:14px;
    color:rgb(59, 56, 56);
}
dl dd div:nth-child(1) p:nth-child(3) span{
    color:orange;
}
dl dd div:nth-child(1) p:nth-child(3) span:nth-child(1){
    color:rgb(59, 56, 56);
}
dl dd div:nth-child(1) p:nth-child(4){
    color:#6cbab2;
    font-size:15px;
    margin-top:5px;
}
dl dd div:nth-child(2) p img{
    width:15px;
    height:15px;
}
dl dd div:nth-child(2) p span{
    font-size:12px;
}
dl dd div:nth-child(2) p{
    margin-top:3px;
}
</style>
