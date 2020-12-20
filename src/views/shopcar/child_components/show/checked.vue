<template>
  <div class="center">
    <img src="~assets/img/cart/tick.svg" alt="选择图片"  :class="{ischecked:ischecked}"/>
  </div>
</template>
<script>
export default {
  name: "checked",
  props: {
    ischecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.center{
  display:flex;
  align-items:center;
  padding:5px;
}
img {
  width:20px;
  height: 20px;
  border-radius: 50%;
  
  border:2px solid #aaaaaa 
}
.ischecked{
  background-color: red;
}
</style>