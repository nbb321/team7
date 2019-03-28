<template>
    <div class="swiper-container">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="swiper-slide"><img src="../assets/images/img1.jpg" alt=""></swiper-slide>
            <swiper-slide class="swiper-slide"><img src="../assets/images/img2.jpg" alt=""></swiper-slide>
            <swiper-slide class="swiper-slide"><img src="../assets/images/pic.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
</template>

<script>
import "swiper/dist/css/swiper.css"
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    data(){
        return{
            swiperOption:{
                autoplay:true,
                speed:500,
                loop:true,
                effect:"slide"
            }
        }
    },
    components:{
        swiper,
        swiperSlide
    }
}
</script>

<style>
.swiper-container{
    width:100%;
    height:150px;
    overflow: hidden;
}
.swiper-container .swiper{
   width:100%;
    height:100%; 
}
.swiper-container .swiper .swiper-slide{
    width:100%;
    height:100%;
}
.swiper-container .swiper .swiper-slide img{
    width:100%;
    height:100%;
}
</style>
