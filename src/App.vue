<template>
  <div id="app">
    <keep-alive exclude="detail" >
      <router-view></router-view>
    </keep-alive>
    <tab-bar> </tab-bar>
  </div>
</template>

<script>
import tabBar from "components/content/tab-bar/tab-bar.vue"
export default {
  name: 'App',
  components: {
    tabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
