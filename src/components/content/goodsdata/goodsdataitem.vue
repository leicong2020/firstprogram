<template>
  <div class="goods-item">
    <img :src="showimage" alt="" @load="refresh" />
    <div class="text">
      <p class="title">{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="cfav">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "goodsdataitem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showimage() {
      return  this.goodsItem.image||this.goodsItem.show.img ;
    },
  },
  methods: {
    refresh() {
        this.$bus.$emit("refresh"); //事件总线
      }
  },
};

</script>
<style scoped>
.goods-item {
  border-radius: 15px;
  width: 48%;
  text-align: center;
  position: relative;
  padding-bottom: 25px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-item .text {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  font-size: 12px;
}
.goods-item .text p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.goods-item .text .cfav {
  position: relative;
  left: 14px;
}
.goods-item .text .price {
  color: var(--color-tint);
}
.goods-item .text .cfav::before {
  content: "";
  height: 12px;
  width: 12px;
  left: -13px;
  position: absolute;
  background-image: url(~assets/img/common/collect.svg);
  background-size: 12px 12px;
  color: var(--color-tint);
}
</style>