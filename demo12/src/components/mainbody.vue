<template>
    <div class="body">
    <div class="bodytop">
        <ul>
            <li>排序</li>
            <li>筛选</li>
            <li>正序</li>
            <li>倒序</li>
        </ul>
    </div>
    <div class="title">
        <div class="left">
            <img src="../assets/images/q_03.gif" alt="">
        </div>
        <div class="right">
            <div class="up">
                <p class="biao">小木船潮鲜牛肉火锅(马连洼店)</p>
                <p class="xing"><span><img src="../assets/images/xing_03.gif" alt=""><img src="../assets/images/xing_03.gif" alt=""><img src="../assets/images/xing_03.gif" alt=""></span></p>
                <p class="con">牛肉火锅</p>
                <p class="yuding">支持预订</p>
            </div>
            <div class="bottom">
                <p class="one"><img src="../assets/images/tuan_03.gif" alt=""><span>8人餐888元</span></p>
                <p><img src="../assets/images/tuan_06.gif" alt=""><span>93代100元</span></p>
            </div>
        </div>
    </div>
    <div class="title">
        <div class="left">
            <img src="../assets/images/q_06.gif" alt="">
        </div>
        <div class="right">
            <div class="up">
                <p class="biao">小木船潮鲜牛肉火锅(马连洼店)</p>
                <p class="xing"><span><img src="../assets/images/xing_03.gif" alt=""><img src="../assets/images/xing_03.gif" alt=""><img src="../assets/images/xing_03.gif" alt=""></span></p>
                <p class="con">牛肉火锅</p>
                <p class="yuding">支持预订</p>
            </div>
            <div class="bottom">
                <p class="one"><img src="../assets/images/tuan_03.gif" alt=""><span>8人餐888元</span></p>
                <p><img src="../assets/images/tuan_06.gif" alt=""><span>93代100元</span></p>
            </div>
        </div>
    </div>
    
    <div class="title">
        <div class="left">
            <img src="../assets/images/q_12.gif" alt="">
        </div>
        <div class="right">
            <div class="up">
                <p class="biao">小木船潮鲜牛肉火锅(马连洼店)</p>
                <p class="xing"><span><img src="../assets/images/xing_03.gif" alt=""><img src="../assets/images/xing_03.gif" alt=""><img src="../assets/images/xing_03.gif" alt=""></span></p>
                <p class="con">牛肉火锅</p>
                <p class="yuding">支持预订</p>
            </div>
            <div class="bottom">
                <p class="one"><img src="../assets/images/tuan_03.gif" alt=""><span>8人餐888元</span></p>
                <p><img src="../assets/images/tuan_06.gif" alt=""><span>93代100元</span></p>
            </div>
        </div>
    </div>
    <div class="title">
        <div class="left">
            <img src="../assets/images/q_08.gif" alt="">
        </div>
        <div class="right">
            <div class="up">
                <p class="biao">小木船潮鲜牛肉火锅(马连洼店)</p>
                <p class="xing"><span><img src="../assets/images/xing_03.gif" alt=""><img src="../assets/images/xing_03.gif" alt=""><img src="../assets/images/xing_03.gif" alt=""></span></p>
                <p class="con">牛肉火锅</p>
                <p class="yuding">支持预订</p>
            </div>
            <div class="bottom">
                <p class="one"><img src="../assets/images/tuan_03.gif" alt=""><span>8人餐888元</span></p>
                <p><img src="../assets/images/tuan_06.gif" alt=""><span>93代100元</span></p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.body{
    display: flex;
    flex:1;
    /* background: darkkhaki; */
    flex-direction: column;
}
.bodytop{
    width: 100%;
    height: 40px;
    display: flex;
}
.bodytop ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    border:1px #ccc solid;
        background: #fafafa;
} 
.bodytop ul li{
    width: 23%;
    height: 100%;

    /* background: #ccc; */
    margin-left: 5px;
    text-align: center;
    line-height: 40px;
    color: #989898;
} 
.title{
    width: 100%;
    height: 150px;
    /* background: darkorange; */
    display: flex;
    flex-direction: row;
    border-bottom:1px #ccc solid;
    background: #fafafa;
    margin-top:1px;
}
.left{
width: 30%;
height: 100%;
/* background: salmon; */
display: flex;
margin-left: 3px;
}
.left img{
    width: 80px;
    height: 80px;
    margin:5px 15px;
}
.right{
    width: 69%;
    height: 80px;
    border-bottom: 1px #ccc solid;
    font-size: 14px;
    color: #333333;
    padding-left: 3px;
}
.biao{
    font-size:16px;
}
.xing{
    display: flex;
    flex-direction: row;
}
.con{
    font-size: 14px;
    color: #989898;
}
.yuding{
    color: #6cbab2;
}
.bottom{
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    
    }
    .bottom p{
        width: 100%;
        height: 20px;
        margin-left: 10px;
    }
    .one{
        margin-top:5px;
    }
    .bottom p span{
     color: #898989;
     padding-left: 10px;   
    }
</style>
