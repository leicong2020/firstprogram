<template>
  <div>
     <nav-bar>
      <img src="~assets/img/common/back.svg" alt="" slot="left" @click="back"/>
      <template v-slot:center>
        <div class="item">
          <div
            v-for="(item, index) in program"
            :key="index"
            class="center"
            :class="{ active: index === current }"
            @click="turncurrent(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import navBar from "components/common/nav-bar/nav-bar.vue";
export default {
  name: "navBar_",
  data() {
    return {
      program: ["商品", "参数", "评论", "推荐"],
      current: 0,
      id:this.$route.query.id
    };
  },
  components: {
    navBar,
  },
  methods:{
    turncurrent(index){
      this.$emit("turncurrent",index)
    },
    back(){
    this.$router.back()
  }
  }

};
</script>
<style scoped>
img {
  margin-top: 12px;
}
.item {
  display: flex;
}
.item .center {
  flex: 1;
}
.active {
  color: var(--color-tint);
}
</style>