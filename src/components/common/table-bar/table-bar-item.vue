<template>
  <div id="table-bar-item" @click="test()">
    <div v-if="isactive" ><slot name="img" ></slot></div>
    <div v-else><slot name="active"></slot></div>
    <div :style="getcolor"><slot name="text"></slot></div>
  </div>
</template>
<script>
export default{
  name :"table-bar-item",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"
      }
  },
 
 computed:{
   isactive(){
     return this.$route.path.indexOf(this.path)
   },
   getcolor(){
     return !this.isactive ? {color:this.activeColor} : {}
   }
 },
  methods:{
    test(){
      this.$router.push(this.path)
    }
  }
}

</script>
<style scoped>
#table-bar-item{
  height:49px;
  text-align: center;
  font-size:14px;
}
#table-bar-item /deep/ img{
  height: 24px;
  width: 24px;
}
</style>