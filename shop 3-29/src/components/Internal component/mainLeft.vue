<template>
    <p @click="changeList(index,item.value)">{{options.title}}</p>
</template>

<script>
export default {
    name: 'mainLeft',
    props: ['options'],
    data () {
        return {
            options
        }
    },
    methods: {
        changeList (index,val) {
            this.$bus.$emit('menuEvent', val)
            this.i = index
        }
    }
}
</script>

<style>
.left{
    flex: 1;
    width: 100%;
    background: #cccccc;
    line-height: 40px;
    text-align: center;
}
</style>
