//防抖函数
export function debounce(func, delay) {
  let time = null
  return function () {
    if (time) {
      clearTimeout(time)
    }
    time = setTimeout(() => {
      func()
    }, delay)
  }
}

// 日期处理函数
export function formdate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}
