<template>
  <swiper class="swiper">
    <swiper-item v-for="(item, index) in getswiperdata" :key="index">
      <img :src="item" alt="图片" @load="detailswiperover" />
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem} from "components/common/swiper/index.js"
export default {
  name: "detailswiper",
  data(){
    return{
      test:false,
    }
  },
  props: {
    getswiperdata: Array,
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods:{
    detailswiperover(){
      if(!this.test){
        this.$emit("detailswiperover")
        this.test=true
      }
    }
  }
};
</script>
<style scoped>
.swiper{
  height:300px;
  overflow:hidden
}
</style>