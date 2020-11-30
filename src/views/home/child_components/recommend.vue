<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="recommend_content">
      <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default{
name :"recommend",
props:{
  recommend:Array,
}
}
</script>
<style scoped>
.recommend{
  display:flex;
  text-align:center;
  font-size:12px;
  border-bottom:10px solid #eee;
  padding:15px 0 10px;
}
.recommend img{
  height: 70px;
  width: 70px;
  margin-bottom:10px;
}
.recommend .recommend_content{
  flex:1;
}
</style>