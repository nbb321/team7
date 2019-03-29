<!-- 调用左边的组件 -->
<template>
<div class="left">
     <ul>
         <li v-for="(item,index) in menulist" :key="index" @click='changeMenu(item.value,index)' :class="{active:i===index}">{{item.name}}</li>
     </ul>
   </div>
</template>

<script>
import menulist from "../data/menu.json"
import datalist from "../data/data.json"
export default {
    data(){
        return {
            i:null,
           menulist:menulist.menu,
           rightlist:datalist.data,
           initname:'zhekou'
        }
    },
    props:["options"],
    methods:{
        // todo(){
        //     this.$bus.$emit('default',this.initname);
        //     console.log(this.initname)
        // },
        changeMenu(key,index){
       this.$bus.$emit('render',key,this.rightlist);//第一个为方法函数名
       this.i=index;
     }
 }
}
</script>

<style scoped>
.left{
   width:150px;
   height:100%;
}
.left>ul{
    width:100%;
    height:100%;
    text-align:center;

}
.left>ul>li{
    width:100%;
    height:70px;
    line-height:70px;
    list-style:none;
}
.active{
    background:#fff;
    color:#000;
}
</style>
