<template>
        <div class="bodytop">
        <ul>
            <!-- <li v-for="(item,index) in toolList" :key="index" @click="$emit('tab',item.id)">{{item.name}}</li> -->
            <li v-for="(item,index) in toolList" :key="item.id" @click="tab(item.id)" :class="{active:i===index}">{{item.name}}<span :class="['iconfont',i==item.id?'icon-xiangshang':'icon-xiangxia']"></span></li>     
        </ul>
    </div>
</template>

<script>
export default {
 data(){
     return{
         toolList:[
            {name:"全部类目",id:0},
            {name:"附近商家",id:1},
            {name:"全星级排序",id:2},
            {name:"全价格排序",id:3}
         ],
         i:null,//空
     }
 },
 methods:{
     tab(id){
        //console.log(id)
        this.$bus.$emit("sortEvent",id)
        this.i=id
     }
 }
    
 }

</script>

<style>
.bodytop{
    width: 100%;
    height: 40px;
    line-height:40px;
    justify-content: space-around;
        
}
.bodytop ul{
    width: 100%;
    height: 100%;
    display: flex;
    background: #fafafa;
    justify-content: space-around;
    border:1px #ccc solid;
} 
.bodytop ul li{
    width: 24.5%;
    height: 100%;
    text-align: center;
    line-height: 40px;
    color: #989898;
    font-size: 14px;
} 
.iconfont{
    padding-left: 3px;
    line-height: 40px;
}
.active{
    color: aquamarine !important;
}
</style>
