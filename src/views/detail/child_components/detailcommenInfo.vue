<template>
  <div v-if="Object.keys(commoninfo).length!==0">
    <div class="usermore">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="user">
      <div class="userimg"><img :src="commoninfo.user.avatar" alt=""></div>
      <div class="username">{{commoninfo.user.uname}}</div>
    </div>
    <div class="content">
      <p>{{commoninfo.content}}</p>
    </div>
     <div class="rateId">
        <span>{{commoninfo.created|showdata(commoninfo.created)}}</span>
        <span>{{commoninfo.style}}</span>
        <span>{{commoninfo.rateId}}</span>
    </div>
    <div class="img">
      <img v-for="(item,index) in commoninfo.images" :key="index" :src="item" alt="">
    </div>
   
  </div>
</template>
<script>
import {formdate} from "common/utils.js"
export default{
name :"detailcommenInfo",
props:{
  commoninfo:Object,
},
data(){
  return {

  }
},
filters:{
  showdata(value){
    const date=new Date(value*1000)
    return formdate(date,"yyyy-MM-dd ")
  }
}
}
</script>
<style scoped>
.usermore{
  height: 50px;
  display:flex;
  justify-content: space-between;
  padding:10px;
  border-bottom:px solid #3a3a3a;
  line-height:50px;
}
.user{
  height: 50px;
  display:flex;
  padding:10px;
  line-height:50px;
  font-size:20px;
  color:black;
  padding:12px;
}
.user img{
  height:40px;
  width:40px;
}
.userimg{
  width:30%
}
.username{
  height: 50px;
  line-height:50px;
}
.content{
  padding:10px;
}
.img img{
height: 45px;
width: 45px;
}
.rateId{
  height:50px;
  line-height: 50px;
}
</style>