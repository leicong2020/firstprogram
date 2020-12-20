<template>
  <div class="carbutton">
    <div class="check">
      <checked :ischecked="ischeckall" @click.native="Allclick"></checked>
      全选
    </div>
    <div class="content">合计:¥{{this.$store.getters.contentover}}</div>
    <div class="paymoney">去结算({{numbe}})</div>
  </div>
</template>
<script>
import checked from "./show/checked.vue"
export default {
  name: "carbutton",
  components:{
    checked,
   
  },
  data(){
    return {
      x:this.$store.state.goodscar,
    }
  },
  computed:{
    numbe(){
      return this.$store.state.goodscar.filter((n)=>{
        return n.ischeck
      }).reduce((pr,n)=>{
        return pr+n.conutent
      },0)
    },
    // 全选中时:ischecked=true
     ischeckall(){
      let a=this.x.find((n)=>{
          return !n.ischeck
      })
      if(this.x.length==0){
        a=true
      }
       return !a
    }
  },
  methods:{
    Allclick(){
      let q=this.ischeckall
      for(let i=0; i<this.x.length;i++){
        this.x[i].ischeck=!q
      }
    }
  },
}
</script>
<style scoped>
.carbutton{
  text-align: center;
  width: 100%;
  height:49px;
  background-color:#bfa;
  position:absolute;
  bottom:49px;
  left:0px;
  display:flex;
  justify-content: space-between;
   line-height:49px;
}
.paymoney{
  background-color:red;
}
.check{
  display:flex;
}
</style>