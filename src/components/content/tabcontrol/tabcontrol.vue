<template>
  <div class="tabcontrol">
    <slot>
      <div
        v-for="(item, index) in tabcontrol"
        :key="index"
        :class="{ active: index == content }"
        @click="click(index)"
      >
        <span>{{ item }}</span>
      </div>
    </slot>
  </div>
</template>
<script>
export default {
  name: "tabcontrol",
  props: {
    tabcontrol: Array,
  },
  data() {
    return {
      content: 0,
    };
  },
  methods:{
    click(index){
      this.content=index
      this.$emit("clicktabcontral",index)
    }
  }
};
</script>
<style scoped>
.tabcontrol {
  display: flex;
  text-align: center;
}
.tabcontrol div {
  flex: 1;
  height: 40px;
  line-height:40px;
}
.tabcontrol span {
  padding: 5px;
}
.tabcontrol .active {
  color: var(--color-tint);
}
.tabcontrol .active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>