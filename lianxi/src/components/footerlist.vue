<template>
    <footer>
        <ul>
            <li v-for="(item,index) in footerList" 
                :key="index"
                :class="{active:changeRed === index}"
                @click="change(index)">
                <span>
                    {{item.title}}
                </span>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
    name: 'footerlist',
    data () {
        return {
            footerList: [
                {
                    icon: '',
                    title: '首页'
                },
                {
                    icon: '',
                    title: '分类'
                },
                {
                    icon: '',
                    title: '春午餐'
                },
                {
                    icon: '',
                    title: '牛肉髋'
                },
                {
                    icon: '',
                    title: '餐后甜品'
                }
            ],
            changeRed: -1
        }
    },
    methods:{
        change(index){
            this.changeRed = index
        }
    }
}
</script>

<style scoped>
footer {
    width: 100%;
    height: 45px;
    background: #ccc;
}
ul{
    display: flex;
    justify-content: space-around;
    color: rgb(0, 26, 255);
}
ul li {
    height: 45px;
    line-height: 45px;
}
.active{
    color: red;
}
</style>
