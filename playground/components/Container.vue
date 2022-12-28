<script setup lang="ts">
import { TableWithAddRows, SrTableWithAddRows } from "@ui/TableWithAddRows/index"
import { ref } from "vue";
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
</script>

<template>
  <div>
    <h1>business-ui show</h1>
    <EButton @click="clickEvent"></EButton>

    <TableWithAddRows :table-data="tableData" :label-data="labelData" >
      <template #handle="slotProps" >
        <el-button>自定义{{ slotProps.row }}</el-button>
      </template>
    </TableWithAddRows>


  </div>
</template>
