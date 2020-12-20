<template>
  <div class="success" v-show="isshow">{{ message }}</div>
</template>
<script>
export default {
  name: "toast",
  data(){
    return{
      message :"",
      isshow:false
    }

  },
  methods:{
    show(name,time){
      this.message=name
      this.isshow=true
      let test =null
      clearTimeout(test)
      test=setTimeout(() => {
        this.isshow=false
        this.message =""
      }, time);
      
    }
  }
};
</script>
<style scoped>
.success {
  width: 150px;
  height: 30px;
  color: white;
  text-align: center;
  line-height: 30px;
  background-color: rgba(100, 100, 100, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
</style>