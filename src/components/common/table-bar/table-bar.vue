<template>
  <div id="table-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "table-bar",
};
</script>
<style scoped>
   #table-bar{
     display:flex;
     justify-content:space-around;
     background-color:#ccc;
     position:fixed;
     left:0;
     bottom:0;
     right:0;
   }
</style>