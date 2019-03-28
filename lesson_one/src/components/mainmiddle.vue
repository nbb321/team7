<template>
  <section>
    <Tablist></Tablist>
      <div class="dl_list" v-for="item in minejson" :key="item.id">
          <dl>
              <dt><img :src="item.frontImg" alt=""></dt>
              <dd>
                <h3>{{item.name}}</h3>
                <p><startS1 :star="item.avgScore"></startS1></p>
                <p class="one"><span>￥{{item.avgPrice}}/人</span><span>{{item.areaName}} {{item.distance}}</span></p>
                <p class="two"><b>{{item.cateName}}</b></p>
                <i>支持预订</i>
              </dd>
          </dl>
          <div class="love">
              <h2  v-for="(i,index) in item.maidan" :key="index"><img :src="i.icon" alt=""><span>{{i.content}}</span></h2>
          </div>
      </div>
  </section>
</template>

<script>
import Tablist from '../components/Tab_list.vue'
import jsonList from '../assets/mock/list.json'
import startS1 from '../components/startS1.vue'
export default {
    components:{Tablist,startS1},
    data() {
      return{
        minejson:jsonList.data,
      }
    },
    created(){
      let vm = this;
      vm.$bus.$on('searchEvent',(val)=>{
          vm.minejson = jsonList.data
          vm.minejson = vm.minejson.filter(item => {  //条件过滤
          return item.name.indexOf(val) !== -1;  //可以返回多个   全等-1符合条件
        });
      })
      vm.$bus.$on('sortNum',(id)=>{
          //判断点击的id是否为价格排序  id = 3
          if(id == 3){
              vm.minejson.sort((a,b)=>{
                  return a.avgPrice - b.avgPrice
              })
          }else if(id == 2) {
              vm.minejson.sort((a,b)=>{
                  return b.avgScore - a.avgScore
              })
          }
      })
    }
}
</script>

<style scoped>
section{
  width: 100%;
}
.dl_list{
  width:100%;
  height:180px;
  border-bottom:1px solid #ccc;
  display:flex;
  flex-direction: column;
}
dl{
  width: 100%;
  height:120px;
  display:flex; 
}
dt{
  width: 30%;
  height:120px;
}
img{
  width:100%;
  height:100%;
  padding:5px;
}
dd{
  margin-left:5px;
  width: 70%;
  height:120px;
  border-bottom:1px solid #ccc;
  line-height:23px;
  font-size:14px;
}
h3{
  font-size:16px;
}
.one{
  color:#666;
}
.one span{
  padding:0 5px;
}
.two{
  color:#f90;
}
.two b{
  padding:0 3px;
}
i{
  color:blue;
}
.love{
  width: 100%;
  height:60px;
}
h2{
  width: 100%;
  padding-left:30%;
  line-height:30px;
  display:flex;
}
h2 img{
  width:25px;
  height:25px;
  margin:0px 5px;
}
h2 span{
  font-size:14px;
  color:#666;
}
</style>
