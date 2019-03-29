<template>
    <div class="list">
        <ul>
            <li v-for="(item,index) in listJSON" :key="index" @click='tabChange(index)' :class="{active:i===index}">{{item.title}}</li>
            <button>好友拼单</button>
        </ul>
         <div :is="seleVue"></div>
    </div>
   
</template>

<script>
import onelistCom from "./onelist.vue"
import twolistCom from "./twolist.vue"
import threelistCom from "./threelist.vue"
export default {
 data(){
     return {
         i:null,
         seleVue:"onelistCom",
         listJSON:[{
             title:"点菜",
             seleName:"onelistCom"
         },{
             title:"评价",
              seleName:"twolistCom"
         },{
             title:"商家",
              seleName:"threelistCom"
         }]
     }
 },
 components:{
     onelistCom,twolistCom,threelistCom
 },
 methods:{
     tabChange(index){
      this.seleVue=this.listJSON[index].seleName;
      this.i=index;
     }
 }
 
}
</script>

<style scoped>
.list{
    width:100%;
    height:40px;
    line-height:40px;
}
.list>ul{
    width:100%;
    list-style:none;
    display:flex;
    justify-content: space-around; 
    align-items: center;
}
.list>ul>button{
    display:inline-block;
    width:80px;
    height:30px;
    border:1px solid orange;
    color:orangered;
    font-size:12px;
    line-height:30px;
    text-align:center;
    border-radius:10px;
    

}
.active{
    color:orange;
    border-bottom:1px solid orange;
}
</style>
