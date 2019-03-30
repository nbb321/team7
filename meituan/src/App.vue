<template>
  <div id="app">
      <headerBar/>
      <tabBar  :options="list" @bindbtn="btnbind"/>
      <div :is="i"></div>
  </div>
</template>

<script>
import headerBar from './components/headerBar'
import mainbody from './components/mainbody'
import mainbody1 from './components/mainbody1'
import mainbody2 from './components/mainbody2'
import tabBar from './components/tabBar'
import reset from './assets/css/reset.css'
import icon from './assets/font/iconfont.css'
export default {
  name: 'App',
  components: {
    headerBar,
    tabBar,
    mainbody,
    mainbody1,
    mainbody2
  },
  data() {
    return { 
      i:'mainbody',
      list:[
              {name:'点菜',comname:'mainbody'},
              {name:'评价',comname:'mainbody1'},
              {name:'商家',comname:'mainbody2'}
          ]
    }
  },
  methods:{
    btnbind(index) {
      this.i = this.list[index].comname
    }
  }
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
}

</style>
