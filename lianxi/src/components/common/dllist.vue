<template>
  <div>
    <dl>
      <dt>
          <input type="checkbox" v-model="options.checked">
        <p>
          <img :src="'../assets/'+options.pic" alt>
        </p>
        <p>
          <button @click="options.count++">+</button>
          <input type="text" v-model="options.count" class="pst" disabled="disabled">
          <button @click="options.count--">-</button>
        </p>
      </dt>
      <dd>
        <p class="title" v-text="options.title"></p>
        <p class="weight">{{options.weight}}</p>
        <p class="info">
          <span v-for="(i,index) in options.description" :key="index">{{i}}</span>
        </p>
        <p class="price">￥{{options.price}}</p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "dllist",
  props: ["options"]
};
</script>

<style scoped>
dl {
  width: 100%;
  height: 160px;
  border-bottom: 1px solid #0f0;
  border-top: 1px solid #0f0;
  display: flex;
  margin-top: 20px;
}
dl dt {
  flex: 1;
  display: flex;
  flex-direction: column;
}
dl dt p {
  flex: 1;
}
dl dt p img {
  width: 100%;
  height: 100%;
}
dl dd {
  flex: 1;
  padding: 20px;
}
button {
  width: 25px;
  height: 25px;
  outline: none;
}
.pst {
  width: 40px;
  border: 0;
  outline: none;
  text-align: center;
  background: #ffffff;
}
</style>
