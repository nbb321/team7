<template>
  <div class="main">
    <section v-for="(item,index) in list" :key="index">
      <div class="left">
        <img :src="item.frontImg" alt="">
      </div>
      <div class="right">
        <div class="right-top">
          <p style="padding-top:5px">{{item.name}}</p>
          <div class="star" style="padding-top:15px">
            <starCom :star="item.avgScore"></starCom><span>￥{{item.avgPrice}}/人</span>
            <p>{{item.areaName}}</p>
          </div>
          <div class="ping" style="padding-top:5px">
            <span>{{item.cateName}}</span>
          </div>
        </div>
        <div class="right-bottom">
          <p v-for="(ite,index) in item.maidan" :key="index"><img :src="ite.icon">{{ite.content}}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import starCom from "./star.vue";
import listJson from "../mock/list.json";
export default {
  data() {
    return {
      list: listJson.data
    };
  },
  components:{
      starCom
  },
  mounted(){
      let vm=this;
      vm.$bus.$on('searchEvent',function(res){
           vm.list=listJson.data;
          vm.list=vm.list.filter(function(item){
         return item.name.indexOf(res)!==-1;
      })
      });
      vm.$bus.$on('sortEvent',function(val,flag){//false
            let sortArr=[
                  (a,b)=> b.avgPrice-a.avgPrice,
                  (a,b)=> a.avgPrice-b.avgPrice,
                  (a,b)=> b.avgScore-a.avgScore,
                  (a,b)=> a.avgScore-b.avgScore
        ];
         if(flag){
             //进行升序
             if(val==3){
                vm.list.sort(sortArr[1])
             }else if(val==2){
                 vm.list.sort(sortArr[3])
             }
         }else{
            if(val==3){
                vm.list.sort(sortArr[0])
             }else if(val==2){
                 vm.list.sort(sortArr[2])
             }
         }
      })
  }
};
</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.main {
  width: 100%;
  margin-top: 5px;
  overflow-y: scroll;
}
.main > section {
  width: 100%;
  height: 160px;
  border-bottom: 1px solid #ccc;
  display: flex;
  text-align: center;
}
.main > section > .left {
  width: 30%;
  height: 100%;
}
.left > img {
  width: 100px;
  padding-top: 30px;
}
.main > section>.right {
  width: 70%;
}
.right > .right-top {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #ccc;
}
.star {
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size:12px;
}
.star > span {
  width: 20%;
}
.star > p {
  width: 30%;
}
.ping {
  width: 100%;
}

.right-bottom{
    width:100%;
    font-size:12px;
}
.right-bottom>p{
    padding:5px 0px;
    display:flex;
}
.right-bottom>p>img {
  width: 20px;
  height: 20px;
}
</style>
