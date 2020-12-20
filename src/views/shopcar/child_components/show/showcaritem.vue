<template>
  <div class="item">
    <checked class="checked" :ischecked="showitem.ischeck"></checked>
    <div class="leftimg">
      <img :src="showitem.img" alt="商品图片" @load="refresh"/>
    </div>
    <div class="right">
      <div>{{ showitem.title }}</div>
      <div class="conutent">
        <div class="price">{{ showitem.price }}</div>
        <div>
          <button
            @click.stop="reduce"
            :disabled="showitem.conutent<=1"
          >
            -</button
          >X{{ showitem.conutent }}<button @click.stop="add">+</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import checked from "./checked.vue";
export default {
  name: "showcaritem",
  props: {
    showitem: Object,
    index: Number,
  },
  components: {
    checked,
  },
  methods: {
    reduce() {
      this.$store.commit("reduce", this.index);
    },
    add() {
      this.$store.commit("add", this.index);
    },
    refresh(){
      this.$bus.$emit("refresh")
    }
  },
  created() {},
};
</script>
<style scoped>
.item {
  padding: 3px;
  display: flex;
  height: 100px;
  border-bottom: 2px solid #aaaaaa;
}
.leftimg {
  padding-right: 5px;
}
.leftimg img {
  width: 60px;
  height: 90px;
  border-radius: 10px;
}
.right {
  padding: 10px;
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;
}
.right > div {
  width: 100%;
}
.conutent {
  display: flex;
  justify-content: space-between;
}
.price {
  color: orange;
}
button {
  width: 20px;
  height: 20px;
  margin: 0 5px;
}
.checked {
  text-align: center;
}
</style>