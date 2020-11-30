<template>
  <div id="home">
    <nav-bar class="nav">
      <template v-slot:center>
        <div>购物车</div>
      </template>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend :recommend="recommend" />
    <featureview></featureview>
    <tabcontrol :tabcontrol="tabcontrol" class="tabcontrol"></tabcontrol>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
     <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
     <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
     <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
     <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
     <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
  </div>
</template>
<script>
import navBar from "components/common/nav-bar/nav-bar.vue"; // 引入navBar
import tabcontrol from "components/common/tabcontrol/tabcontrol.vue"   //引入tabcontrol

import homeSwiper from "./child_components/home_swiper.vue"; // 引入swiper
import recommend from "./child_components/recommend.vue"; // 引入推荐
import featureview from "./child_components/featureview";

import { homeworkdata } from "network/home.js"; //引入首页网络请求
export default {
  name: "home",
  data() {
    return {
      banner: null,
      dKeyword: null,
      keywords: null,
      recommend: null,
      tabcontrol:["流行","新款","精选"]
    };
  },
  components: {
    navBar,
    homeSwiper,
    recommend,
    featureview,
    tabcontrol,
  },
  created() {
    homeworkdata().then((res) => {
      (this.banner = res.data.banner.list),
        (this.dKeyword = res.data.dKeyword.list),
        (this.keywords = res.data.keywords.list),
        (this.recommend = res.data.recommend.list);
    });
  },
};
</script>
<style scoped>
#home{
  padding-top:49px;
}
#home .nav {
  background-color: var(--color-tint);
  text-align: center;
  color: white;
  position:fixed;
  left:0px;
  right:0px;
  top:0px;
  z-index:9
}
.tabcontrol{
  position:sticky;
  top:55px;
}
</style>