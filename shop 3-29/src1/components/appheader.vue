<template>
    <div class="list">
        <div class="item-con" v-for="(list,index) in arr" :key="index">
            <item v-for="(item,index) in list" :key="index" :options="item">
                <p class="txt" v-if="item.right">{{item.right}}</p>

            </item>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            arr: [[
                {icon:'http://img4.imgtn.bdimg.com/it/u=2378606792,1096904360&fm=26&gp=0.jpg',title:'听书网'},
                {icon:'http://img4.imgtn.bdimg.com/it/u=2378606792,1096904360&fm=26&gp=0.jpg',title:'听书网'}
            ]]
        }
    }
}
</script>

<style>

</style>
