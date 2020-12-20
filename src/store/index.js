
import Vue from "vue"
import vuex from "vuex"

Vue.use(vuex)

const store = new vuex.Store({
  state: {
    goodscar: [],
  },
  actions: {
    addcarinfo(content,goodsinfo) {
      return new Promise((resolve,reject)=>{
        let test = null
        for (let v of content.state.goodscar) {
          if (goodsinfo.iid == v.iid) {
            content.commit("addcount",v)
            resolve("商品数量加1")
            test = v
          }
        }
        if(!test){
          content.commit("pushdata",goodsinfo)
          resolve("商品添加成功")
        }
        reject("添加失败")
      })
        
    }
  },
  getters: {
    getlength(state){
      return state.goodscar.length
    },
    contentover(state){
      return state.goodscar.filter((n)=>{
       return n.ischeck
     }).reduce((prevalue,n)=>{
       if(n.price.indexOf("¥")!=-1){
        return prevalue+n.conutent*parseFloat(n.price.slice(1,))
       }
       else{return prevalue+n.conutent*parseFloat(n.price)}
     },0).toFixed(2)
   }
  },
  mutations: {
   addcount(state,obj){
    obj.conutent++
   },
   pushdata(state,obj){
    obj.conutent=1
    obj.ischeck=false
    state.goodscar.push(obj)
   },
   reduce(state,index){
      state.goodscar[index].conutent--
   },
   add(state,index){
    state.goodscar[index].conutent++
   },
   checkclick(state,index){
     state.goodscar[index].ischeck=!state.goodscar[index].ischeck
   }
  },
})

export default store
