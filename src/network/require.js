import axios from "axios"

export function require (config){
  // 实例化axios
  const network1=axios.create({
    baseURL:"http://106.54.54.237:8000/api/mn",
    timeout:5000
  })
  // 请求拦截
  // network1.interceptors.request.use(config=>{
  //   return config
  // },err=>{

  // })
  // 响应拦截
  network1.interceptors.response.use(res=>{
    return res.data
  },err=>{
    console.log(err)
  })
   return network1(config)
}