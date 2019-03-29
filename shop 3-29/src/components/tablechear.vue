<template>
    <div class="tab-list">
        <div class="left">
            <mainLeft v-for="(item,index) in datas"
            :key="index"
            :options="item"> 
            </mainLeft>
        </div>
        <mainRight></mainRight>
    </div>
</template>

<script>
import mainLeft from './Internal component/mainLeft'
import mainRight from './Internal component/mainRight'
export default {
    name: 'tablechear',
    data(){
        return{
            menus:[],
            datas:[]
        }
    },
    components: {
        mainLeft,
        mainRight,
    },
    created () {
        this.$http.get('http://localhost:8080/api/datalist').then(res => {
            console.log(res.data.data)
            this.datas = res.data.data
        })
        this.$http.get('http://localhost:8080/api/menu').then(res => {
           this.menus = res.data.menu;
        })
    }
}
</script>

<style>
.tab-list{
    width: 100%;
    height: auto;
    display: flex;
}

</style>
