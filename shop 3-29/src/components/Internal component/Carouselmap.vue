<template>
    <swiper>
        <swiper-slide>
            <img src="http://www.tattoo77.com/uploads/allimg/140515/12-140515123943642.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="http://www.mbachina.com/uploads/article/201603/24/1458805140589526.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="http://img5.hao123.com/data/desktop/748876ada2438022bc35f7ed943fe870_1366_768" alt="">
        </swiper-slide>
    </swiper>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
    name: 'Carouselmap'
}
</script>

<style scoped>
img{
    width: 100%;
    height: 150px;
}
</style>
