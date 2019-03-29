<template>
    <div class="todolist">
        <ul>
            <li v-for="(item,index) in datalist" :key="index" @click='clickfn(index)' :class="{active:i===index}">{{item}} <span :class="['iconfont',i===index && choose?'icon-triangle-up':'icon-triangle-down']"></span></li>
        </ul>
    </div>
</template>

<script>
export default {
      
   data(){
     return {
           i:null,
           choose:false,
          datalist:['全部类目','附近商家','星级排序','价格排序']
       }
   },
   methods:{
       clickfn(id){
        //将这个值传给mainCom.vue
        this.choose=!this.choose;
        this.$bus.$emit('sortEvent',id,this.choose);
        this.i=id;
       }
   }
}
</script>

<style>
.todolist{
    width:100%;
    height:50px;
    border-bottom:1px solid #ccc;
    line-height:50px;
}
.todolist>ul{
    width:100%;
    height:100%;
     display:flex;
    justify-content: space-around;
}
.todolist>ul>li{
    list-style:none;
}
.todolist>ul>li.active{
    color:orange;
}
</style>
