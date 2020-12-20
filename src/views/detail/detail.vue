<template>
  <div class="detail">
    <nav-bar-2 @turncurrent="turncurrent" ref="navbar"></nav-bar-2>
    <!--头-->
    <scroll class="content" ref="scroll" @scroll="scrollto" :probeType="3">
      <detailswiper
        :getswiperdata="getswiperdata"
        @detailswiperover="detailswiperover"
      ></detailswiper>
      <!--轮播图-->
      <goods :goods="goods"></goods>
      <!--商品展示-->
      <detail-shop :shop="shop"></detail-shop>
      <detailgoodsinfo
        :detailgoodsinfo="goodsinfo"
        @imageLoad="detailswiperover"
      ></detailgoodsinfo>
      <detailitemparams
        :itemparams="itemparams"
        ref="goodsinfo"
      ></detailitemparams>
      <detailcommen-info
        :commoninfo="commenInfo"
        ref="commeninfo"
      ></detailcommen-info>
      <goodsdata :goodsdata="recommends" ref="goodsdata"></goodsdata>
    </scroll>
    <detailbutton @addCar="addcar"></detailbutton>
    <backtop class="backtop" @click.native="backtop" v-show="backtopshow" />
    <!-- <div v-if="addsuccess" class="success">宝贝已加入购物车</div> -->
    <!-- <toast v-show="addsuccess" :message="messag"></toast> -->
  </div>
</template>
<script>
import navBar2 from "./child_components/navBar_.vue";
import detailswiper from "./child_components/detailswiper.vue";
import goods from "./child_components/goods.vue";
import detailShop from "./child_components/detail_shop.vue"; //引入商店信息
import detailgoodsinfo from "./child_components/detailgoodsinfo.vue"; //引入商品展示信息
import detailitemparams from "./child_components/detail_itemparams"; //引入参数信息
import detailcommenInfo from "./child_components/detailcommenInfo.vue";
import detailbutton from "./child_components/detailbutton.vue";
import backtop from "components/common/backtop/backtop.vue";

import scroll from "components/common/bscroll/bscroll.vue";
import goodsdata from "components/content/goodsdata/goodsdata.vue";
import { backto } from "common/mixin.js";
// 下面是网络模块
import {
  detaildata,
  getrecommend,
  Goods,
  Shop,
  itemParams,
} from "network/detail.js";

// import toast from "components/common/toast/toast.vue";

// import { debounce } from "common/utils";
export default {
  name: "detail",
  data() {
    return {
      getswiperdata: [],
      goods: {},
      shop: {},
      goodsinfo: {},
      itemparams: {},
      commenInfo: {},
      recommends: [],
      turnoffsettop: [],
      getscrolly: null,
      navcurrent: 0,
      addsuccess: false,
      messag:""
    };
  },
  components: {
    navBar2,
    detailswiper,
    goods,
    detailShop,
    scroll,
    detailgoodsinfo,
    detailitemparams,
    detailcommenInfo,
    goodsdata,
    detailbutton,
    backtop,
    // toast
  },
  mixins: [backto],
  created() {
    // 获取信息
    detaildata(this.$route.query.id).then((res) => {
      const data = res.result;
      this.getswiperdata = res.result.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 获取商家信息
      this.shop = new Shop(data.shopInfo);
      // 获取商品怕评论信息
      this.goodsinfo = data.detailInfo;
      // 获取尺寸信息
      this.itemparams = new itemParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate != 0) {
        this.commenInfo = data.rate.list[0];
      }
    });
    getrecommend().then((res) => {
      this.recommends = res.data.list;
    }),
      this.$bus.$on("refresh2", () => {
        this.$refs.scroll.refresh();
      });
    this.getscrolly = function () {
      this.turnoffsettop = [];
      this.turnoffsettop.push(0);
      this.turnoffsettop.push(-this.$refs.goodsinfo.$el.offsetTop);
      this.turnoffsettop.push(-this.$refs.commeninfo.$el.offsetTop);
      this.turnoffsettop.push(-this.$refs.goodsdata.$el.offsetTop);
    };
  },
  methods: {
    detailswiperover() {
      this.$refs.scroll.refresh();
      this.getscrolly();
    },
    turncurrent(index) {
      this.$refs.scroll.backtop(0, this.turnoffsettop[index]);
    },
    scrollto(position) {
      this.backtopshow = position.y < -1500;
      let length = this.turnoffsettop.length;
      for (let i = 0; i < length; i++) {
        if (i < length - 1) {
          if (
            position.y < this.turnoffsettop[i] &&
            position.y > this.turnoffsettop[i + 1]
          ) {
            this.$refs.navbar.current = i;
          }
        } else {
          if (position.y < this.turnoffsettop[i]) {
            this.$refs.navbar.current = i;
          }
        }
      }
    },
    addcar() {
      const addgoods = {
        img: this.getswiperdata[0],
        title: this.goods.title,
        price: this.goods.oldPrice,
        iid: this.$route.query.id,
      };
      if (addgoods.img) {
        this.$store.dispatch("addcarinfo", addgoods).then((value)=>{
        //   this.messag=value
        // this.addsuccess = true;
        // let time = null;
        // clearTimeout(time);
        // time = setTimeout(() => {
        //   this.messag=""
        //   this.addsuccess = false;
        // }, 1000);
        this.$toast.show(value,2000)
        });
      }
    },
  },
};
</script>
<style scoped>
.detail {
  position: relative;
  z-index: 8;
  background-color: white;
  height: 100vh;
}
.content {
  position: relative;
  /* top: 49px;
  bottom: 49px; */
  height: calc(100% - 49px - 49px);
  overflow: hidden;
}
.backtop {
  position: fixed;
  right: 0;
  bottom: 60px;
}
</style>