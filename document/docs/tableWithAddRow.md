# 可编辑增删表格
该组件可以增加删除行,并且编辑行,是业务中常用的组件

## 基本用法
通过传入`tableData`生成表格,传入`labelData`对应列的名称,双击当前行可快捷编辑

<tablesss  :tableData="data" :labelData="labelData" class='btm'></tablesss>


``` vue
<template>
  <TableWithAddRows :table-data="tableData" :label-data="labelData" />
</template>

<script setup>
  import {TableWithAddRows} from 'business-ui-alpha'
  import {ref} from 'vue'
  const tableData = ref([{name:'张三',age:'22'},{name:'李四',age:'42'}])
  const labelData = ref({name:'姓名',age:'年龄'})
</script>

```
::: tip 
 vue2 可以使用 optionsApi 只要保证绑定值是响应式的就可以
:::

## 自定义按钮
可通过传入`handle`插槽来增加自定义按钮,并获取到当前行的数据

<tablesss  :tableData="data2" :labelData="labelData2" handleColumnWidth="300px" class='btm'>
 <template #handle="slotProps" >
    <el-button>自定义按钮</el-button>
  </template>
</tablesss>

``` vue
<template>
  <TableWithAddRows :table-data="tableData" :label-data="labelData" >
    <template #handle="slotProps" >
      <el-button>自定义{{ slotProps.row }}</el-button>
    </template>
  </TableWithAddRows>
</template>

<script setup>
  import {TableWithAddRows} from 'business-ui-alpha'
  import {ref} from 'vue'
  const tableData = ref([{name:'张三',age:'22'},{name:'李四',age:'42'}])
  const labelData = ref({name:'列名1',age:'列名2'})
</script>

```
::: tip 
 labelData 中的key 需要与数组元素中的key对应
:::

<script setup>
  import {ref} from 'vue'
  const data = ref([{name:'张三',age:'22'},{name:'李四',age:'42'}])
  const data2 = ref([{name:'张三',age:'22'},{name:'李四',age:'42'}])
  const labelData2 = ref({name:'列名1',age:'列名2'})
  const labelData = ref({name:'姓名',age:'年龄'})

</script>
<style lang="scss" >
  .btm{
    margin-bottom:60px !important;
  }
  .vp-doc h2{
    border:none !important;
  }
.vp-doc {
  color: #2c3e50;
  padding: 12px 0;
  font-size: 14px;
  
  h1 {
    font-size: 36px;
    font-weight: 400;
  }

  h2 {
    font-size: 26px;
    font-weight: 400;
    padding-top: 36px;
  }

  pre, code {
    font-family: source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace;
  }

  p > code, table code {
    background-color: #f1f1f1;
    padding: .15em .5em;
    border-radius: 4px;
    color: #476582;
    transition: color .5s,background-color .5s;
  }

  pre {
    position: relative;
    color: #f7f7f7;
    padding: 20px 24px;
    background-color: #282c34;
    border-radius: 8px;
  }
  
  table {
    display: table;
    border-collapse: collapse;
    width: 100%;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
    th {
      text-align: left;
      white-space: nowrap;
      color: #909399;
      font-weight: 400;
      &:first-child {
        padding-left: 10px;
      }
    }
    td, th {
    border:none !important;
      border-bottom: 1px solid #dcdfe6;
      padding: 15px;
      background:#fff !important;
      max-width: 250px;
    }
  }
}
.VPDoc.has-aside .content-container{
      max-width: 800px !important;
}
</style>


## 表格属性


| 参数              | 说明                                             | 类型    | 可选值 | 默认值 |
| ----------------- | ------------------------------------------------ | ------- | ------ | ------ |
| tableData         | 表格组件的数据源                                 | array   | —      | —      |
| labelData         | 表格组件的表头数据,需要和`tableData`中的字段对应 | object  | —      | —      |
| disabled          | 是否禁用编辑功能                                 | boolean | —      | false  |
| handleColumnWidth | 列的共同宽度                                     | string  | —      | -      |

## 插槽


| 参数   | 说明       | 类型  | 可选值 | 默认值 |
| ------ | ---------- | ----- | ------ | ------ |
| handle | 操作区插槽 | VNode | slotProps    | 当前行数据     |
