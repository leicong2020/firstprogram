export const itemmixins={
  data(){
    return {
      itemmixin: null,
    }
  },
  activated(){
    this.$refs.scroll.refresh()
    this.itemmixin =  () =>{
      //注意要用箭头函数,使用function会有this指向问题
    this.$refs.scroll.refresh();
    };
    this.$bus.$on("refresh",this.itemmixin);
  },
  deactivated() {
    this.$bus.$off("refresh", this.itemmixin);
  },
}

export const backto={
  data(){
    return {
      backtopshow: false,
    }
  },
  methods:{
    backtop() {
      this.$refs.scroll.backtop(0, 0, 300);
    },
  },
}