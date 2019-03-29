<template>
    <div class="right">
        <dl>
            <dt></dt>
            <dd></dd>
        </dl>
    </div>
</template>

<script>
export default {
    name: 'mainRight',
    data () {
        return {
            shoplist: []
        }
    },
    created () {
        this.$bus.$on('menuEvent',(val)=>{
            this.shoplist = this.options[val].list
            console.log(this)
        })
    }
}
</script>

<style>
.right{
    flex:2.8;
    width: 100%;
    background: red;
}
.right dl{
    width: 100%;
    height: 150px;
}
</style>
