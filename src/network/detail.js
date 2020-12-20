import {
  require
} from "./require.js"
export function detaildata(iid) {
  return require({
    url: "/detail",
    params: {
      iid
    }
  })
}
export function getrecommend(){
  return require({
    url:"/recommend"
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice||itemInfo.highPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}
export class itemParams{
  constructor(info,rule){
    this.info=info
    this.imag=info ? info.image: " "
    this.set=info.set
    this.rule=rule
    this.table= rule.tables
  }
}