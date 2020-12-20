<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "bscroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: { type: Number, default: 0 },
    click: { type: Boolean, default: true },
    pullUpLoad: { type: Boolean, default:true },
  },
  methods: {
    //1.跳转位置
    backtop(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    //2.刷新上拉加载更多
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    //刷新
    refresh(){
      this.scroll.refresh()
    },
    //获取离开时高度
    getscrolly(){
      return this.scroll.y
    }
  },
  mounted() {
      //1.创建对象
      this.scroll = new Bscroll(this.$refs.wrapper, {
        probeType:this.pullUpLoad,
        click:true,
        pullUpLoad:this.pullUpLoad,
      });
      //2.获取滚动位置
      this.scroll.on("scroll",(position)=>{
        this.$emit("scroll",position)
      })
      //3.上拉加载更多
        this.scroll.on("pullingUp",()=>{
        this.$emit("pullingUp")
      })
  },
};
</script>
<style scoped>
</style>