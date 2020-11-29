<template>
  <div id="home">
    <nav-bar class="nav">
        <template v-slot:center>
          <div>购物车</div>
        </template>
    </nav-bar>
  </div>
</template>
<script>
import navBar from "components/common/nav-bar/nav-bar.vue";
export default {
  name: "home",
  components: {
    navBar,
  },
};
</script>
<style scoped>
#home .nav {
  background-color: var(--color-tint);
  text-align: center;
  color: white;
}
</style>