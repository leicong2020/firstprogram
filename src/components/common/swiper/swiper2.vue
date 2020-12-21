<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
      <!-- 存放具体的轮播内容 -->
      <slot></slot>
    </div>
    <!-- 分页器 -->
    <div :class="{ 'swiper-pagination': pagination }"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "swiper2",
  props: {
    swipeid: {
      type: String,
      default: "swiper-container",
    },
    effect: {
      type: String,
      default: "slide",
    },
    loop: {
      type: Boolean,
      default: true,
    },
    direction: {
      type: String,
      default: "horizontal",
    },
    pagination: {
      type: Boolean,
      default: true,
    },
    paginationType: {
      type: String,
      default: "bullets",
    },
  },
  data() {
    return {
      dom: "",
    };
  },
  mounted() {
    this.$nextTick(() => {
      var that = this;
      this.dom = new Swiper("." + that.swipeid, {
        //循环
        // loop: true,
        // loopFillGroupWithBlank: false,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loopAdditionalSlides: 0,
        preloadImages: true,
        //图片加载完重新初始化
        updateOnImagesReady: true,

        //分页器
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          clickable: true,
        },
        //分页类型
        paginationType: that.paginationType,
        //自动播放
        // autoplay: {delay:1000},
        //方向
        direction: that.direction,
        //特效
        effect: that.effect,
        //用户操作swiper之后，不禁止autoplay
        disableOnInteraction: false,
        //修改swiper自己或子元素时，自动初始化swiper
        observer: true,
        //修改swiper的父元素时，自动初始化swiper
        observeParents: true,
        preventClicks: true, //当swiper在触摸时阻止默认事件（preventDefault），用于防止触摸时触发链接跳转。
      });
    });
  },
};
</script>

<style>
.swiper-container {
  width: 100vw;
}
.swiper-pagination-bullet-active {
  background: #fff;
} /* /代表分页器中当前指示的小圆点的类名 */
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 1rem;
  width: 95%;
  text-align: center;
}
</style>