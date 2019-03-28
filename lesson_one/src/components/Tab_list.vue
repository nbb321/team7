<template>
<div class="tab">
    <p v-for="item in list" :key="item.id" :class="{color1:i==item.id}" @click="sortFn(item.id)">{{item.name}}<i :class="['iconfont',i==item.id ? 'icon-xiangshang' : 'icon-xiangxia']"></i></p>
</div>
</template>

<script>
export default {
    data(){
      return{
        list:[
              {name:'全部项目',id:'0'},
              {name:'附近商家',id:'1'},
              {name:'星级排序',id:'2'},
              {name:'价格排序',id:'3'}
          ],
        i:''
      }   
    },
    methods:{
      sortFn(id) {
        this.$bus.$emit('sortNum',id)
        this.i = id
      }
    }
}
</script>

<style scoped>
.tab{
  width: 100%;
  height:50px;
  display:flex;
  text-align:center;
  line-height:50px;
  border-bottom:1px solid #ccc;
}
.tab i{
  margin-left:5px;
  font-size:14px;
}
p{
  flex:1;
  color:#666;
}
.color1{
  color:blue;
}
</style>
