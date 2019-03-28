<template>
  <div class="starDom">
    <span v-for="ii in parseInt(star)" class="quan"></span>
    <span v-if="star%parseInt(star)!==0" class="ban"></span>
    <span v-for="i in 5-Math.ceil(star)" class="hui"></span>
  </div>
</template>

<script>
export default {
  props: {
    star: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>

.starDom>span {
  width: 15px;
  height: 15px;
  display: inline-block;
}
.quan {
  background: url("../assets/images/quan.png") no-repeat;
  background-size: cover;
}
.ban {
  background: url("../assets/images/ban.png") no-repeat;
  background-size: cover;
}
.hui {
  background: url("../assets/images/hui.png") no-repeat;
  background-size: cover;
}
</style>
