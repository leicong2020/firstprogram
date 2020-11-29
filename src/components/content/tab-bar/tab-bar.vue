<template>
  <table-bar>
    <!-- 首页 -->
    <table-bar-item path="/home" >
      <template v-slot:img>
        <img src="~assets/img/tabbar/home.svg" alt="首页图片">
      </template>
       <template v-slot:active>
        <img src="~assets/img/tabbar/home_active.svg" alt="首页图片">
      </template>
      <template v-slot:text>
       <div>首页</div>
      </template>
    </table-bar-item>
    <!-- 分类 -->
     <table-bar-item path="/category" >
      <template v-slot:img>
        <img src="~assets/img/tabbar/category.svg" alt="分类图片">
      </template>
       <template v-slot:active>
        <img src="~assets/img/tabbar/category_active.svg" alt="分类图片">
      </template>
      <template v-slot:text>
       <div>分类</div>
      </template>
      </table-bar-item>
      <!-- 购物车 -->
      <table-bar-item path="/shopcar" >
      <template v-slot:img>
        <img src="~assets/img/tabbar/shopcart.svg" alt="购物车图片">
      </template>
       <template v-slot:active>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="购物车图片">
      </template>
      <template v-slot:text>
       <div>购物车</div>
      </template>
      </table-bar-item>
      <!-- 我的 -->
      <table-bar-item path="/profile" >
      <template v-slot:img>
        <img src="~assets/img/tabbar/profile.svg" alt="我的图片">
      </template>
       <template v-slot:active>
        <img src="~assets/img/tabbar/profile_active.svg" alt="我的图片">
      </template>
      <template v-slot:text>
       <div>我的</div>
      </template>
    </table-bar-item>
  </table-bar>
</template>
<script>
import tableBar from "components/common/table-bar/table-bar.vue"
import tableBarItem from "components/common/table-bar/table-bar-item.vue"
export default{

name :"tab-bar",
components:{
  tableBar,
  tableBarItem,
}
}
</script>
<style scoped>
</style>