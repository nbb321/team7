<template>
    <div class="wrap">
        <header>
            <my-search></my-search>
            <div class="banner">
                <span v-for="(item,index) in data"
                :key="index"
                @click="toggle(index)"
                :class="{active:index===nowindex}">
                {{item}}
                </span>
            </div>
        </header>
        <main>
            <Carouselmap></Carouselmap>
            <tablechear v-show="nowindex===0"></tablechear>
            <tabEvaluation v-show="nowindex===1"></tabEvaluation>
            <tabMerchant v-show="nowindex===2"></tabMerchant>
        </main>
        <footer>
            <p>
                <span>￥0</span>
                <span>另需配送费￥5</span>
            </p>
            <p></p>
            <p>去结算</p>
        </footer>
    </div>
</template>

<script>
import Carouselmap from '@/components/Internal component/Carouselmap'
import tabMerchant from '@/components/tabMerchant'
import tabEvaluation from '@/components/tabEvaluation'
import tablechear from '@/components/tablechear'
export default {
    name:'pagemain',
    components: {
        tablechear,
        tabMerchant,
        tabEvaluation,
        Carouselmap
    },
    data () {
        return {
            data: ['菜单', '评价', '商家'],
            nowindex: 0,
            isShow: false
        }
    },
    methods: {
        toggle(index){
            this.nowindex = index;
            
        }
    }
}
</script>

<style>
    *{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .wrap,body,html{
        width: 100%;
        height: 100%;
    }
    .wrap{
        display: flex;
        flex-direction: column;
    }
    header{
        width: 100%;
        height: 100px;
    }
    header .search{
        width: 100%;
        height: 60px;
        text-align: center;
        line-height: 50px;
        display: flex;
        background: #0f0;
    }
    header .search span{
        flex: 1;
    }
    header .search span:nth-child(2){
        flex: 2.5;
        width: 100%;
        background: #ccc;
        border-radius: 40px;
        height: 30px;
        margin-top: 10px;
        text-align: center;
        line-height: 30px;
    }
    header .search span:nth-child(2) input{
        text-align: center;
        width: 90%;
        border: none;
        outline: none;
        background: #ccc;
        
    }
    header .banner{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-bottom:1px solid #ccc;
        display: flex;
        text-align: center;
    }
    header .banner span{
        flex: 1;
    }
    .active{
        color: red;
    }
    main{
        flex: 1;
        width: 100%;
    }
    footer {
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: #000;
        display: flex;
    }
    footer p{
        color: #fff;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    footer p:nth-child(3){
        background: orange;
    }
    footer p span{
        flex: 1;
        line-height: 28px;
    }
</style>

