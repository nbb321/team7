<template>
    <dl>
        <dt><img src="../assets/images/pic.jpg" alt=""></dt>
        <dd>
            <div>
                <h3>小木船潮汕牛肉火锅(马连洼店)</h3>
                <p>
                    <span>￥114/人</span>
                    <span>农业大学西区＜100m</span>
                </p>
                <p>
                    <span>潮汕牛肉火锅</span>
                    <span>农业大学西区</span>
                    <span>回头客多</span>
                </p>
                <p>支持预订</p>
            </div>
            <div>
                <p><span>团</span><span>8人餐888元</span></p>
                <p><span>劵</span><span>93代100元</span></p>
            </div>
        </dd>
    </dl>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
    padding:0;
    margin:0;
}
dl{
    width:100%;
    height:180px;
    border-bottom:1px solid #ccc;
    display:flex;
    padding:10px 10px;
    box-sizing: border-box;
    font-size:14px;
}
dl dt{
    width:100px;
    height:100px;
}
dl dt img{
    width:100%;
    height:100%;
}
dl dd{
    height:100%;
    flex:1;
    margin-left:8px;
}
dl dd div:nth-child(1){
    width:100%;
    height:100px;
    border-bottom:1px solid #ccc;
}
dl dd div:nth-child(1) h3{
    font-size:15px;
}
dl dd div:nth-child(1) p:nth-child(2){
    font-size:13px;
    color:rgb(59, 56, 56);
    line-height: 30px;
}
dl dd div:nth-child(1) p:nth-child(3){
    font-size:14px;
    color:rgb(59, 56, 56);
}
dl dd div:nth-child(1) p:nth-child(3) span{
    color:orange;
}
dl dd div:nth-child(1) p:nth-child(3) span:nth-child(1){
    color:rgb(59, 56, 56);
}
dl dd div:nth-child(1) p:nth-child(4){
    color:blue;
    font-size:15px;
    margin-top:5px;
}
dl dd div:nth-child(2) p{
    line-height:32px;
}
dl dd div:nth-child(2) p:nth-child(1) span:nth-child(1){
    padding:3px 3px;
    background:blue;
    color:#fff;
    margin-right:5px;
}
dl dd div:nth-child(2) p:nth-child(2) span:nth-child(1){
    padding:3px 3px;
    background:orange;
    color:#fff;
    margin-right:5px;
}
</style>
