<template>
    <div class="wrap">
        <feifu></feifu>
        <mainlist></mainlist>
        <footerlist></footerlist>
    </div>
</template>

<script>
import feifu from '@/components/feifu'
import mainlist from '@/components/mainlist'
import footerlist from '@/components/footerlist'
export default {
    name: 'List',
    components:{
        footerlist,
        feifu,
        mainlist
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
</style>
