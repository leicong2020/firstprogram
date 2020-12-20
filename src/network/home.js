import {require} from "./require.js"

export  function homeworkdata(){
  return require({
    url:"/home/multidata"}
    )
}

export function gethomeshop(type,page){
  return require({
    url:"/home/data",
    params:{
      type,
      page,
    }
  })
}