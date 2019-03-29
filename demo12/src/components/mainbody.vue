<template>
    <div class="body">

     <div class="title" v-for="(item,index) in list" :key="index">
        <div class="left">
            <img :src="item.frontImg" alt="">
        </div>
        <div class="right">
            <div class="up">
                <p class="biao">{{item.cateName}}</p>
                <p class="xing">{{item.avgScore}} 价格：<span class="price">{{item.avgPrice}}</span>/人</p>
                <p class="con">牛肉火锅</p>
                <p class="yuding">支持预订</p>
            </div>
            <div class="bottom">
                <p class="one"><img src="../assets/images/tuan_03.gif" alt=""><span>8人餐888元</span></p>
                <p><img src="../assets/images/tuan_06.gif" alt=""><span>93代100元</span></p>
            </div>
        </div>
    </div>  
    </div>
</template>

<script>
import data from '../data/data.js'
// console.log(data[0].data.poiList.poiInfos)
export default {
data(){
    return{
        list:[]
    }
},
created(){
   this.list=data[0].data.poiList.poiInfos
//    console.log(this.list)
this.$bus.$on('sortEvent',(id)=>{
   if(id==3){
       this.list=this.list.sort(function(a,b){
           return a.avgPrice-b.avgPrice
       })
   }
})
let that=this;
this.$bus.$on('inp',(val)=>{
    that.list=data[0].data.poiList.poiInfos
   that.list= that.list.filter(function(ite){
        return ite.cateName.indexOf(val)!==-1
    })
})
}

}
</script>

<style scoped>
.body{
    flex:1;
    overflow-y:scroll;
    width: 100%;
    /* position: fixed; */
}
.title{
    width: 100%;
    height:150px;
    border-bottom:1px #ccc solid;
    background: #fafafa;
    display:flex;
    justify-content: space-around;
}
.left{
width: 30%;
height: 100%;
}
.left img{
    width: 80px;
    height: 80px;
    margin:5px 15px;
}
.right{
    width: 70%;
    height: 80px;
    font-size: 14px;
    color: #333333;
}
.up{
    width:100%;
}
.biao{
    font-size:16px;
}
.xing{
    display: flex;
    flex-direction: row;
}
.con{
    font-size: 14px;
    color: #989898;
}
.yuding{
    color: #6cbab2;
}
.bottom{
    width:100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    line-height: 55px;
    
    }
    .bottom p{
        width: 100%;
        height: 20px;
    }
    .bottom p span{
     color: #898989;
     padding-left: 10px;   
    }
</style>
