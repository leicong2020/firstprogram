import Toast from "./toast.vue"
const obj = {}
obj.install = function (vue) {

  //1.创建组件构造器
  const toastContrustor = vue.extend(Toast)
      // console.log( toastContrustor);
//2.new 方式 根据组件构造器 创建一个组件对象
  const toast =new toastContrustor()

  //3.挂载到某一个元素上
  toast.$mount(document.createElement("div"))

//4. toast.$el 对应div

  document.body.appendChild(toast.$el)

  vue.prototype.$toast = toast

}


export default obj
