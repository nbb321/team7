<template>
    <div class="wrap">
        <header>
            <span></span>
            <span>发现</span>
            <span></span>
        </header>
        <main>
            
        </main>
        <footer></footer>
    </div>
</template>

<script>
export default {
    name:'pagemain',
    data(){
        return {
            list: {
                
            }
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
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #ccc;
        display: flex;
        text-align: center;
    }
    header span{
        flex: 1;
    }

</style>

