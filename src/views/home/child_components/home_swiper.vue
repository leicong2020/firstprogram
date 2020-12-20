<template>
  <div>
    <Swiper >
        <Swiper-item v-for="(item,index) in banner" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="swiperover" class="img">
          </a>
        </Swiper-item>
    </Swiper>
  </div>
</template>
<script>
import {Swiper,SwiperItem} from  "components/common/swiper/index.js"
export default{
  name:"home_swiper.vue",
  props:{
    banner:{
      type:Array,
    }
  },
  data(){
    return{
      swipertime:false,
    }
  },
  methods:{
    swiperover(){
      if(!this.imgdata){
        this.$emit("swiperover")
        this.swipertime=true
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>
<style scoped>
.img{
  width: 100%;
}
</style>