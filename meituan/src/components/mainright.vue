<template>
    <div class="dist">
        <h2 >无辜炸鸡双拼</h2>
        <div class="div" v-for="(item,index) in alllist" :key="index">
            <dl>
                <dt><img :src="item.fontImg"></dt>
                <dd>
                    <h4>{{item.title}}</h4>
                    <p>{{item.description}}</p>
                    <p><span>月售{{item.good.sale}}</span> <span>赞{{item.good.zan}}</span></p>
                    <p><b>￥{{item.price}}</b></p>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            alllist:[]
        }
    },
    props:['options','mine'],
    created() {
        let vm = this;
        this.$bus.$on('binditem',(value) => {
            this.alllist = this.options[this.alllist].list
            this.alllist = this.options[value].list
        })
    }
}
</script>

<style scoped>
.dist{
    width: 80%;
    height:100%;
    background:#fff;
}
.div{
    width: 100%;
    height:150px;
    padding-top:50px;
}
h2{
    padding:5px 5px;
}
dl{
    width: 100%;
    height:150px;
    display:flex;
}
dt{
    width: 30%;
    height:150px;
}
dt img{
    width: 100%;
    height:100%;
    padding:5px;
}
dd{
    width: 70%;
    height:150px;
    padding-left:5px;
    line-height:30px;
}
dd h4{
    font-size:18px;
    font-weight:600;
}
dd p{
    font-size:14px;
    color:#666;
}
p b{
    font-weight:600;
    font-size:16px;
    color:#f00;
}
</style>
