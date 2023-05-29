<!--
 * @Author: sroxck
 * @Date: 2022-11-29 16:14:27
 * @LastEditors: sroxck
 * @LastEditTime: 2023-05-29 11:12:33
 * @Description: 
-->
<script setup lang="ts">
import { TableWithAddRows, SrTableWithAddRows } from "@ui/TableWithAddRows/index"
import { Search } from "@ui/Search";
import { Button } from "@ui/Button";
import { computed, reactive, ref } from "vue";
const tableData = ref([
  { name: '11', age: 12 },
  { name: '12', age: 13 },
  { name: '13', age: 14 },
  { name: '14', age: 15 },
])
const labelData = ref({
  name: '姓名',
  age: '年龄'
})
const clickEvent = () => {
  console.log(tableData.value)
}
const count = ref(0)
console.log(count)
const ss = computed(() => {
  return 22
}
)
console.log(ss, '00')
const searchConfig = reactive({
  config: {
    inline: true,
    labelWidth: '75px'
  },
  property: [
    {
      native: {
        prefixIcon: 'iconsearchsvg'
      },
      model: 'age',
      value: '2222'
    },
    {
      native: {
        prefixIcon: 'iconsearchsvg'
      },
      model: 'name',
      value: '4444'
    },
    {
      native: {
        prefixIcon: 'iconsearchsvg'
      },
      model: 'sex',
      value: '12'
    }
  ]
})
</script>

<template>
  <div>
    <h1>business-ui show</h1>
    <Button @click="clickEvent"></Button>
    <Search :config="searchConfig"></Search>
    <TableWithAddRows :table-data="tableData" :label-data="labelData">
      <template #handle="slotProps">
        <el-button>自定义{{ slotProps.row }}</el-button>
      </template>
    </TableWithAddRows>


  </div>
</template>
