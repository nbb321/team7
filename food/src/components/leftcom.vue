<template>
     <div class="left">
        <ul>
          <li v-for="(item,index) in options" :class="{liActive:i==index}" @click="menuBtn(index,item.value)" :key="index" v-html="item.name"></li>
        </ul>
      </div>
</template>

<script>
export default {
    props:['options'],
    data(){
        return{
            i:0
        }
    },
    methods:{
        menuBtn(index,val){
            this.$bus.$emit('menuEvent',val);
            this.i=index;
        }
    }
}
</script>

<style>

</style>
