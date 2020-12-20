<template>
  <div class="buttonbar">
    <div class="one">
      <div>
        <img src="~assets/img/detail/icon_7k3umoz4lys/kefu.svg" alt="" />
        <div>客服</div>
      </div>
    </div>
    <div class="two">
      <img src="~assets/img/detail/icon_7k3umoz4lys/dianpu.svg" alt="" />
      <div>店铺</div>
    </div>
    <div class="three">
      <img src="~assets/img/detail/icon_7k3umoz4lys/shoucang.svg" alt="" />
      <div>收藏</div>
    </div>
    <div class="four">
      <div @click="addcar">加入购物车</div>
    </div>
    <div class="five">
      <div>购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailbutton.vue",
  methods: {
    addcar() {
      this.$emit("addCar");
    },
  },
};
</script>
<style scoped>
.buttonbar {
  background-color: white;
  height: 49px;
  display: flex;
  text-align: center;
  padding: 0 5px;
}
.one,
.two,
.three {
  flex: 1;
  text-align: center;
}
.buttonbar img {
  width: 30px;
  height: 30px;
}
.four {
  background-color: pink;
}
.five {
  background-color: yellow;
}
.four,
.five {
  line-height: 49px;
  width: 25vw;
}
</style>