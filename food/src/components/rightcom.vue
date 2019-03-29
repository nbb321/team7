<template>
    <section>
        <dl v-for="(el,index) in shopList" :key="index">
            <dt><img :src="el.fontImg" alt=""></dt>
            <dd>
                <h4>{{el.title}}</h4>
                <p>{{el.description[0]}}+{{el.description[1]}}</p>
                <p><span>月赞{{el.good.sale}}</span><span>赞{{el.good.zan}}</span></p>
                <div class="cont">
                    <span>￥{{el.price}}</span>
                    <h3>+</h3>
                </div>
            </dd>
        </dl>
    </section>
</template>

<script>
export default {
    data(){
        return{
           shopList:[]
        }
    },
    props:["options","menudefault"],
    created(){
        this.shopList = this.options[this.menudefault].list
        this.$bus.$on('menuEvent',(val)=>{
            this.shopList=this.options[val].list;
        })
    },
    methods:{
        
    }
}
</script>

<style>
dl{
    width:100%;
    height:140px;
    display:flex;
    padding:15px 8px;
    box-sizing:border-box;
    justify-content: space-between;
}
dl dt{
    width:90px;
    height:90px;
}
dl dt img{
    width:100%;
    height:100%;
}
dl dd{
    flex:1;
    height:100%;
    margin-left:5px;
}
dl dd h4{
    font-size:16px;
}
dl dd p:nth-child(2){
    font-size:14px;
    color:#aaa;
    margin:5px 0;
}
dl dd p:nth-child(3){
    font-size:14px;
    color:#aaa;
}
dl dd .cont{
    width:100%;
    height:40px;
    line-height:40px;
    margin-top:5px;
    display:flex;
    justify-content: space-between;
}
dl dd .cont span:nth-child(1){
    color:red;
    font-size:17px;
}
dl dd .cont h3{
    width:30px;
    height:30px;
    line-height:30px;
    text-align:center;
    border-radius:100%;
    background:yellow;
    font-size:20px;
}
</style>
