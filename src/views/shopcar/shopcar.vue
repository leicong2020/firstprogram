<template>
  <div class="shopcar">
    <navbar class="center">
      <div slot="center">购物车({{getlength}})</div>
    </navbar>
    <bscroll class="scroll" ref="scroll"> 
      <show ></show>
    </bscroll>
    <carbutton></carbutton>
  </div>
</template>
<script>
import navbar from "components/common/nav-bar/nav-bar.vue";
import bscroll from "components/common/bscroll/bscroll.vue";
import show from "./child_components/show/show.vue";
import carbutton from "./child_components/carbutton.vue";
import {mapGetters} from "vuex";
import {itemmixins} from  "common/mixin.js";
export default {
  name: "shopcar",
  components: {
    navbar,
    bscroll,
    show,
    carbutton,
  },
  created(){

  },
  computed:{
    // getlength(){
    //   return this.$store.getters.getlength 
    // }
    ...mapGetters({
      getlength:"getlength"
      })
  },
  mixins:[itemmixins],
  methods:{
    fresh(){
      this.$refs.scroll.refresh()
    }
  },
  // watch:{
  //   // getlength(){
  //   //   this.$refs.scroll.refresh()
  //   // }
  //    getlength: {
  //     handler() {
  //         // this.fresh()
  //         this.$nextTick(()=>{
  //           this.$refs.scroll.refresh()
  //         })
          
  //     },
  //     immediate: true,
  //     deep:true
  //   }
  // }
};
</script>
<style scoped>
.center {
  background-color: var(--color-tint);
}
.shopcar {
  height: 100vh;
}
.scroll {
  height: calc(100vh - 49px - 49px - 54px);
  overflow: hidden;
  padding:10px;
}
</style>