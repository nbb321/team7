<template>
    <footer>
        <dl v-for="(item,index) in footerList" :key="index" :class="{active:changeRed==index}" @click="change(index)">
            <dd :class="item.icon"></dd>
            <dt>{{item.foot}}</dt>
        </dl>
    </footer>
</template>

<script>
export default {
    data(){
        return{
            footerList:[
                {icon:"iconfont icon-shouye",foot:"首页"},
                {icon:"iconfont icon-other",foot:"分类"},
                {icon:"iconfont icon-qianniu",foot:"宠味圈"},
                {icon:"iconfont icon-daishouhuo",foot:"购物车"},
                {icon:"iconfont icon-wode",foot:"我的"}
            ],
            changeRed:-1
        }
    },
    methods:{
        change(index){
            this.changeRed=index;
        }
    }
}
</script>

<style scoped>
footer{
    width:100%;
    height:50px;
    background:#eee;
    display:flex;
}
footer dl{
    flex:1;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
footer dl.active{
    color:rgb(255, 157, 0);
}
footer dl dt{
    font-size:12px;
}
footer dl dd.icon-shouye,
dd.icon-other,
dd.icon-qianniu,
dd.icon-daishouhuo,
dd.icon-wode{
    font-size:20px;
}
</style>
