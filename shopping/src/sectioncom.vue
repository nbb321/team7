<template>
    <section>
        <div class="checkall">
            <label><input type="checkbox" v-model="checkAll" @change="checkAllBtn">全选</label>
            <p>编辑</p>
        </div>
        <div class="list">
            <listcom v-for="item in shopList" :key="item.id" :options="item" @checkedEvent="getCheckList(item)"></listcom>
        </div>
        <div class="totalfooter">
            <div>合计：<span>{{totalPrice}}</span></div>
            <div>结算(<span>{{cont}}</span>)</div>
        </div>
    </section>
</template>

<script>
import listcom from "./components/listcom.vue";
export default {
    data(){
        return{
            checkAll:false,
            shopList:[{
                checked:false,
                id:0,
                pic:'img.jpg',
                price:120,
                count:0,
                title:'亚美特 鸡肉蔬菜',
                weight:'150g/袋',
                wei:"规格：一袋装/1.59kg",
                description:['鸡肉味','大型犬粮']
            },{
                checked:false,
                id:1,
                pic:'img.jpg',
                price:180,
                count:0,
                title:'鸡翅膀',
                weight:'150g/袋',
                wei:"规格：一袋装/1.59kg",
                description:['鸡肉味','大型犬粮']
            }]
        }
    },
    watch:{
        shopList:{
            handler:function(newval,oldval){
                this.checkAll=newval.every(item=>item.checked===true)
            },
            deep:true //深度监听   可以监听对象
        }
    },
    computed:{
        totalPrice(){
            return this.shopList.reduce((total,current)=>{
                if(current.checked){
                    total=total+current.price*current.count;
                }
                return total;
            },0)
        },
        cont(){
            return this.shopList.reduce((total,current)=>{
                if(current.checked){
                    total=total+current.count;
                }
                return total;
            },0)
        }
    },
    methods:{
        getCheckList(value){
            if(value.checked){
                this.checkList.push(value.id);
            }else{
                let index=this.checkList.findIndex(item=>item==value.id);
                this.checkList.splice(index,1);
            }
        },
        checkAllBtn(){
            let vm=this;
            vm.shopList.forEach(item=>{
                item.checked=vm.checkAll;
            })
        }
    },
    components:{listcom}
}
</script>
<style scoped>
section{
    width:100%;
    flex:1;
    display:flex;
    flex-direction: column;
}
.checkall{
    width:100%;
    height:40px;
    line-height:40px;
    border-bottom:1px solid #eee;
    padding:0 10px;
    box-sizing:border-box;
    display:flex;
    justify-content: space-between;
}
.totalfooter{
    width:100%;
    height:40px;
    border-top:1px solid #ccc;
    display:flex;
}
.totalfooter div:nth-child(1){
    width:250px;
    height:100%;
    line-height:40px;
    text-align: center;
}
.totalfooter div:nth-child(1) span{
    color:red;
    font-size:16px;
}
.totalfooter div:nth-child(2){
    flex:1;
    height:100%;
    line-height:40px;
    text-align: center;
    background:red;
    color:#fff;
}
</style>
