<template>
  <div >
    <div v-if="showdata.length!== 0">
      <showcaritem
        v-for="(item, index) in showdata"
        :key="index"
        :showitem="item"
        :index="index"
        @click.native="click(index)"
      ></showcaritem>
    </div>
    <div v-else class="non"> 这里是空的什么也没有,点击首页商品进入详情页点击加入购物车即可加入</div>
  </div>
</template>
<script>
import showcaritem from "./showcaritem.vue";
export default {
  name: "show",
  data() {
    return {
      showdata: this.$store.state.goodscar,
    };
  },
  components: {
    showcaritem,
  },
  methods: {
    click(index) {
      this.$store.commit("checkclick", index);
    },
  },
};
</script>
<style scoped>
 .non{
   font-size: 20px;
 }
</style>