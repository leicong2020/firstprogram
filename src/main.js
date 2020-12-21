import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import store from "./store/index"

import toast from "components/common/toast/index.js"
import Fastclick from "fastclick"    
// import lazyload from "vue-lazyload"

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()  //事件总线（创建￥bus对象）
//安装toast插件
Vue.use(toast)

//解决移动端延迟
Fastclick.attach(document.body)
// 图片懒加载  要修改src 为 vue-lazy
// Vue.use(lazyload,{
// loading:require(./assets/common/img/)
// })

new Vue({
  render: h => h(App),
  router,
  store,
  
}).$mount('#app')