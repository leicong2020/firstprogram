<template>
  <div class="goodsdata" >
    <goodsdataitem v-for="(item,index) in goodsdata" :key="index" :goods-item="item" @click.native="clickdata(item)"> </goodsdataitem>
  </div>
</template>
<script>
import goodsdataitem from "./goodsdataitem"
export default{
name :"goodsdata",
components:{
  goodsdataitem,
},
props:{
  goodsdata:{
    type:Array,
    default(){
      return []
    }
  },
},
methods:{
  clickdata(item){
    this.$router.push({path:"/detail",query:{id:item.iid}})
  }
}
}
</script>
<style scoped>
.goodsdata{
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
}
</style>