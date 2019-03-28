<template>
    <header>
        <span class="iconfont icon-return"></span>
        <div class="input">
            <span class="iconfont icon-search"></span>
            <input type="text" placeholder="输入商品名、品类或商圈" v-model="text" @keyup.enter="search">
        </div>
        <span class="iconfont icon-wode"></span>
    </header>
</template>

<script>
export default {
    props:["list"],
    data(){
        return{
            text:"",
            opts:[]
        }
    },
    methods:{
        search(){
           this.opts=this.list
           this.opts= this.list.filter(item=>{
                return item.name.indexOf(this.text)!==-1
            })
            this.$bus.$emit("addnum",this.opts)
        }
    }
}
</script>

<style>
header{
    width:100%;
    height:44px;
    background:#eee;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0 10px;
    box-sizing: border-box;
}
header span.icon-return,span.icon-wode{
    font-size:25px;
    color:blue;
    font-weight:bolder;
}
header .input{
    width:280px;
    height:30px;
    background:#ccc;
    display:flex;
    align-content: center;
    padding:0 20px;
    box-sizing: border-box;
    border-radius:20px;
}
header .input input{
    width:260px;
    border:none;
    background:none;
    outline: none;
}
header .input span{
    line-height: 30px;
}
</style>
