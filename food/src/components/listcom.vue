<template>
    <div class="list">
        <div class="menu">
            <span v-for="(item,index) in list" :class="{active:changeRed==index}" @click="change(index)" :key="index">{{item.name}}</span>
        </div>
        <span class="dan">好友拼单</span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {name:"点菜"},
                {name:"评价"},
                {name:"商家"}
            ],
            changeRed:0
        }
    },
    methods:{
        change(index){
            this.changeRed=index;
        }
    }
}
</script>

<style>

</style>
