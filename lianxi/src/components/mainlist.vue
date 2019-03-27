<template>
    <main>
        <div class="checkall">
            <label>
                <input type="checkbox" v-model="checkAll">全选
            </label>
        </div>
        <dllist v-for="item in shoplist"
            :key="item.id"
            :options="item">
        </dllist>
        <div class="total">
            <p>合计: </p>
            <p>结算（1）</p>
        </div>
    </main>
</template>

<script>
import dllist from './common/dllist'
export default {
    name:"mainlist",
    data () {
        return {
            checkAll: false,
            shoplist:[
                {
                    checked:false,
                    id:0,
                    pic:'logo.png',
                    price:120,
                    count:0,
                    title:'亚美特 鸡肉蔬菜',
                    weight:'150g/袋',
                    description:['鸡肉味','大型犬粮']
                },{
                    checked:false,
                    id:0,
                    pic:'logo.png',
                    price:180,
                    count:0,
                    title:'果肉蔬菜类',
                    weight:'150g/袋',
                    description:['鸡肉味','大型犬粮']
                }
            ]
        }
    },
    components: {
        dllist
    },
     computed:{
        totalPrice(){
            return this.shopList.reduce((total,current)=>{
                if(current.checked){
                    total=total+current.price*current.count
                }
                return total
            },0)
        }
    }

}
</script>

<style scoped>
    main{
        width: 100%;
        flex: 1;
        position: relative;
    }
    .total{
        width:100%;
        height:40px;
        display: flex;
        position:absolute;
        bottom: 0;
    }
    .total p{
        flex:1;
        padding-left:10px;
    }
</style>
