<template>
    <swiper2>
         <div class="swiper-slide" v-for="(item, index) in banner" :key="index"  >
          <a :href="item.link">
            <img :src="item.image" alt="" @load="swiperover" class="img" />
          </a>
        </div>
    </swiper2>
</template>
<script>
import swiper2 from "components/common/swiper/swiper2.vue";
export default {
  name: "home_swiper2",
  props: {
    banner: {
      type: Array,
    },
  },
  data() {
    return {
      swipertime: false,
    };
  },
  methods: {
    swiperover() {
      if (!this.imgdata) {
        this.$emit("swiperover");
        this.swipertime = true;
      }
    },
  },
  components: {
    swiper2,
  },
};
</script>
<style scoped>
.swiper-slide{
  width:100vw;
}
.swiper-slide img{
  width:100%
}
</style>