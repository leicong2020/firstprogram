<template>
  <Swiper2 class="swiper" >
    <div class="swiper-slide" v-for="(item, index) in getswiperdata" :key="index">
      <img :src="item" alt="图片" @load="detailswiperover" />
    </div>
  </Swiper2>
</template>
<script>
import Swiper2 from "components/common/swiper/swiper2.vue"
export default {
  name: "detailswiper",
  data(){
    return{
      test:false,
      imgover:0
    }
  },
  props: {
    getswiperdata: Array,
  },
  components: {
    Swiper2
  },
  methods:{
    detailswiperover(){
      if(!this.test){
        this.$emit("detailswiperover")
        this.test=true
        this.imgover++
      }
    }
  }
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