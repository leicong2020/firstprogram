<template>
  <div id="home">
    <nav-bar class="nav">
      <template v-slot:center>
        <div>首页</div>
      </template>
    </nav-bar>
    <!-- 加载滚动插件 better-scroll -->
    <tabcontrol
      :tabcontrol="tabcontrol"
      class="tabcontrol"
      @clicktabcontral="clicktabcontral"
      ref="tabcontrol1"
      v-show="tabcontrolshow"
    ></tabcontrol>
    <bscroll
      class="conter"
      ref="scroll"
      :probe-type="3"
      :pullUpLoad="true"
      @scroll="getposition"
      @pullingUp="loadmore"
    >
      <home-swiper :banner="banner" @swiperover="swiperover"></home-swiper>
      <recommend :recommend="recommend" />
      <featureview></featureview>
      <tabcontrol
        :tabcontrol="tabcontrol"
        class="tabcontrol"
        @clicktabcontral="clicktabcontral"
        ref="tabcontrol2"
      ></tabcontrol>
      <goodsdata :goodsdata="goods[courenttype].list"></goodsdata>
    </bscroll>
    <backtop class="backtop" @click.native="backtop" v-show="backtopshow" />
  </div>
</template>
<script>
// common 中的公共组件
import navBar from "components/common/nav-bar/nav-bar.vue"; // 引入navBar
import tabcontrol from "components/content/tabcontrol/tabcontrol.vue"; //引入tabcontrol
import goodsdata from "components/content/goodsdata/goodsdata.vue"; //引入goodsdata
import bscroll from "components/common/bscroll/bscroll.vue"; //引如滑动组件better-scroll
import backtop from "components/common/backtop/backtop.vue"

// 本页面的子组件
import homeSwiper from "./child_components/home_swiper2.vue"; // 引入swiper
import recommend from "./child_components/recommend.vue"; // 引入推荐
import featureview from "./child_components/featureview";

import { homeworkdata, gethomeshop } from "network/home.js"; //引入首页网络请求

// import {debounce} from "common/utils.js"
import { itemmixins, backto } from "common/mixin.js";
export default {
  name: "home",
  mixins: [itemmixins,backto],
  data() {
    return {
      banner: null,
      dKeyword: null,
      keywords: null,
      recommend: null,
      tabcontrol: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      courenttype: "pop",

      tabcontrolOffset: null,
      tabcontrolshow: false,
      recordscrollY: 0,
    };
  },
  components: {
    navBar,
    homeSwiper,
    recommend,
    featureview,
    tabcontrol,
    goodsdata,
    bscroll,
    backtop,
  },
  created() {
    this.homeworkdata();
    this.gethomeshop("pop");
    this.gethomeshop("new");
    this.gethomeshop("sell");
  },
  mounted() {},
  methods: {
    /*
    下面是事件函数*/
    clicktabcontral(index) {
      switch (index) {
        case 0:
          this.courenttype = "pop";
          break;
        case 1:
          this.courenttype = "new";
          break;
        case 2:
          this.courenttype = "sell";
          break;
      }
      this.$refs.tabcontrol1.content = index;
      this.$refs.tabcontrol2.content = index;
    },

    getposition(position) {
      this.backtopshow = position.y < -1500;
      this.tabcontrolshow = -position.y > this.tabcontrolOffset;
    },
    loadmore() {
      this.gethomeshop(this.courenttype);
      this.$refs.scroll.finishPullUp();
      // this.$refs.scroll.refresh()
    },
    swiperover() {
      this.tabcontrolOffset = this.$refs.tabcontrol2.$el.offsetTop;
      this.$refs.scroll.refresh();
    },
    /*
      下面是网络请求函数
    */
    homeworkdata() {
      homeworkdata().then((res) => {
        (this.banner = res.data.banner.list),  
          (this.dKeyword = res.data.dKeyword.list),
          (this.keywords = res.data.keywords.list),
          (this.recommend = res.data.recommend.list);
      });
    },
    gethomeshop(type) {
      let page = this.goods[type].page + 1;
      gethomeshop(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
      });
      this.goods[type].page += 1;
    },
  },
  active() {
    this.$refs.scroll.backtop(0, this.recordscrollY, 0);
    // 跳转后刷新一下
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.recordscrollY = this.$refs.scroll.getscrolly();
    this.$bus.$off("refresh", this.itemmixin);
  },
};
</script>
<style scoped>
#home {
  padding-top: 49px;
}
#home .nav {
  background-color: var(--color-tint);
  text-align: center;
  color: white;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 9;
}
.tabcontrol {
  position: sticky;
  top: 40px;
  z-index: 9;
  background: white;
}
#home .conter {
  position: absolute;
  top: 49px;
  bottom: 54px;
  overflow: hidden;
}
.backtop {
  position: fixed;
  right: 10px;
  bottom: 60px;
}
</style>