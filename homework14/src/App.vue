<template>
  <div class="app">
    <headercom :list="list" ></headercom>
    <swipercom></swipercom>
    <section>
      <div class="list">
          <span v-for="(items,index) in tool" :class="{active:changeRed==index}" @click="sort(index)" :key="index">{{items.name}}</span>
      </div>
    <itemcom v-for="(item,i) in list" :key="i" :options="item"></itemcom>
    </section>
  </div>
</template>

<script>
import headercom from "./components/headercom.vue";
import itemcom from "./components/itemcom.vue";
import swipercom from "./components/swipercom.vue";
export default {
    data(){
      return{
        list:[],
        tool:[
          {name:'全部类目'},
          {name:'附近商家'},
          {name:'星级排序'},
          {name:'价格排序'},
        ],
        changeRed:-1
      }
    },
    created(){
      this.$ajax("/api/list").then(res=>{
      this.list=res.data[0].data.poiList.poiInfos;
       this.$bus.$on("addnum",(res)=>{
         console.log(res)
         this.list=res;
       })
    })
    },
    components:{
        headercom,
        itemcom,
        swipercom
    },
    methods:{
      sort(index){
        this.changeRed=index;
        if(index==3){
          this.list.sort((a,b)=>{
            return a.avgPrice-b.avgPrice;
          })
        }
      }
    }
}
</script>

<style>
  .list span.active{
    color:red;
  }
  
section .list {
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
}

section .list span {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #000;
    font-size: 14px;
}
</style>
