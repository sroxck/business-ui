<script setup lang="ts">
// import {EButton,TableWithAddRows} from '../../dist/business-ui.js'
const data=`<tablesss  :tableData="data" :labelData="labelData"></tablesss>

<script setup>
  import {ref} from 'vue'
  const data = ref([{name:'张三',age:'22'},{name:'李四',age:'42'}])
  const labelData = ref({name:'姓名',age:'年龄'})
</script>`
</script>

<template>
  <div>
    <EButton>4444</EButton>
    
    <TableWithAddRows :tableData="[{name:22},{name:'44'}]" :labelData="{name:'姓名'}"></TableWithAddRows >

      <div>
        {{ data }}
      </div>
   <!-- <TableDemo></TableDemo> -->

  </div>
</template>
