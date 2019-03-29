  <!-- 调用右边的组件 -->
<template>
   <div class="right">
     <!-- <h3>无骨炸鸡双拼</h3> -->

     <section v-for="(item,index) in this.datalist" :key="index">
       <div class="pic">
           <img :src="item.fontImg" alt="">
       </div>
       <div class="con" v-for="(ite,ind) in item.list" :key="ind">
           <h3>{{ite.title}}</h3>
           <p>{{ite.description}}</p>
           <span>月售{{ite.good.sale}}  赞{{ite.good.zan}}</span>
           <div class="price">
               <span>￥{{item.price}}</span>
               <p>+</p>
           </div>
       </div>
     </section>
   </div>
</template>

<script>
export default {
    data(){
        return {
            datalist:[]
        }
    },
    created(){
        this.$bus.$on("render",(key,data)=>{
        this.datalist=data[key].list;
        });
        // this.$bus.$on('default',(defaultname,data)=>{
        // this.datalist=data[defaultname].list;
        // })
   }
}
</script>

<style scoped>
.right{
    width:100%;
    background:#fff;
}
.right>h3{
    font-size:14px;
    font-style: normal;
    font-weight:400;
    padding-left:10px;
}
.right>section{
    width:100%;
    height:150px;
    display:flex;
    margin-top:10px;
}
.pic{
    width:40%;
}
.pic>img{
    width:80px;
    margin:0 auto;
}
.con{
    width:60%;
}
.price{
    width:100%;
    height:30px;
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.price>span{
    color:red;
    font-size:16px;
}
.price>p{
    width:30px;
    height:30px;
    background:orange;
    color:#000;
    border-radius:50%;
    line-height:30px;
    font-size:16px;
    text-align:center;
}
</style>
