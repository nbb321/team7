<template>
  <div class="list">
    <ul>
      <li>全部类目</li>
      <li>附近商家</li>
      <li>智能排序</li>
      <li>筛选</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.list {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom:1px solid #ccc;
}
.list > ul {
  display: flex;
  justify-content: space-around;
}
ul>li{
    list-style:none;

}
</style>
