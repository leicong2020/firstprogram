<template>
  <div v-if="Object.keys(itemparams).length !== 0" class="param-info">
    <div class="info_key">{{itemparams.info.key}}</div>
    <table>
      <tr v-for="(item,index) in itemparams.set" :key="index">
        <td>{{item.key}}</td>
        <td class="table-right">{{item.value}}</td>
      </tr>
    </table>
    <div class="info_key">{{itemparams.rule.key}}</div>
    <table v-for="(item2,index) in itemparams.table" :key="index">
      <tr v-for="(tr,index1) in item2" :key="index1">
        <td v-for="(td,index2) in tr" :key="index2">{{td}}</td>
      </tr>
    </table>
    <div>{{itemparams.rule.disclaimer}}</div>
  </div>
</template>
<script>
export default{
name :"detail_itemparams",
props:{
  itemparams:Object
},
}
</script>
<style scoped>
 .param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
    text-align: center;
  }
.info_key{
  text-align: center;
}
.param-info table {
    width: 100%;
  }
  .param-info table tr {
    height: 42px;
  }
  .param-info table tr td  {
    border-bottom: 1px solid rgba(100,100,100,.1);
    
  } 
.table-right{
  color:var(--color-tint);
  text-align:center;
}
</style>