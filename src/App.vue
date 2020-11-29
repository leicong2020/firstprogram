<template>
  <div id="app">
    <router-view></router-view>
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
