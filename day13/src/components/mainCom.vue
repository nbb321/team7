<template>
  <section>
      <div class="tab">
        <span>全部类目<i></i></span>
        <span>附近商家<i></i></span>
        <span>智能排序<i></i></span>
        <span>筛选<i></i></span>
      </div>
      <div class="dl_list">
          <dl>
              <dt><img src="" alt=""></dt>
              <dd>
                <h3>小木船朝鲜牛肉火锅(马连洼店)</h3>
                <p class="one"><span>￥114/人</span><span>农业大学西区 100m</span></p>
                <p class="two"><b>朝鲜牛肉火锅</b><b>农业大学西区第三名</b><b>回头克多</b></p>
                <i>支持预订</i>
              </dd>
          </dl>
          <div class="love">
              <h2><img src="" alt=""><span>8人餐888元</span></h2>
              <h2><img src="" alt=""><span>93代100元</span></h2>
          </div>
      </div>
  </section>
</template>

<script>

export default {
       
}
</script>

<style>
section{
  width: 100%;
  flex:1;
}
.tab{
  width: 100%;
  height:50px;
  display:flex;
  text-align:center;
  line-height:50px;
  border-bottom:1px solid #ccc;
}
span{
  flex:1;
  color:#666;
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
  padding:3px;
}
dd{
  margin-left:5px;
  width: 70%;
  height:120px;
  border-bottom:1px solid #ccc;
  line-height:30px;
  font-size:14px;
}
h3{
  font-size:16px;
}
.one{
  color:#666;
}
.two{
  color:#f90;
}
i{
  color:blue;
}
.love{
  width: 100%;
  height:60px;
}
h2{
  line-height:30px;
  margin-left:38%;
}
h2 span{
  flex:0;
  font-size:14px;
  color:#666;
}
</style>

