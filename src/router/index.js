import Vue from "vue"
import VueRouter from "vue-router"

const home =()=>import ("views/home/home.vue") 
const category =()=>import("views/category/category.vue")
const profile =()=>import("views/profile/profile.vue")
const shopcar =()=>import("views/shopcar/shopcar.vue")
const routes=[
  {
    path:"/",
    redirect:"/home",
  },
  {
    path:"/profile",
    component:profile,
    meta:{title:"我的"}
  },
  {
    path:"/home",
    component:home,
    meta:{title:"首页"}
  },
  {
    path:"/shopcar",
    component:shopcar,
    meta:{title:"购物车"}
  },
  {
    path:"/category",
    component:category,
    meta:{
      title:"分类"
    }
  }
]

Vue.use(VueRouter)
const router =new VueRouter({
  routes,
  mode:"history"
})
router.beforeEach(function(to,from,next){
  next()
  document.title=to.meta.title
})
export default router