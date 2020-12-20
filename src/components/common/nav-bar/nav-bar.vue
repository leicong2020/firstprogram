<template>
  <div class="nav">
    <div class="nav-bar_left"><slot name="left"></slot></div>
    <div class="nav-bar_center"><slot name="center"></slot></div>
    <div class="nav-bar_right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default{
name :"navb-bar"
}
</script>
<style scoped>
  .nav{
    text-align:center;
    line-height:49px;
    display:flex;
    height:49px;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }
  .nav-bar_left,.nav-bar_right{
    width: 60px;
  }
  .nav-bar_center{
    flex-grow:1;
  }
</style>