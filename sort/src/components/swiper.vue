<template>
  <div class="swiper" id="big">
    <swiper :options="swiperOption">
      <swiper-slide><img src="static/swiper/2.jpg"></swiper-slide>
      <swiper-slide><img src="static/swiper/1.jpg"></swiper-slide>
      <swiper-slide><img src="static/swiper/3.jpg"></swiper-slide>
    </swiper>
    <div class="swiper-pagination" id="small"></div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        autoplay: true,
        speed: 1000,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 280px;
}
#big{
    position:relative;
}
img{
    width:100%;
}
#small{
   position:absolute;
   bottom:0;
   left:50%;
}
</style>



