# 快速开始
本项目使用vue5构建支持vue3+2 😁

### 安装
``` zsh
npm install business-ui-alpha
# or
pnpm install business-ui-alpha
```
### 必备条件
需自行安装对应vue版本的`elementUi`或`elementPlus`

``` js
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

```

::: tip 
 > vue2 用户确保安装 `@vue/composition-api` ,并引用   
 
 按需引入`element`组件的用户请确保`el-table`, `el-button`, `el-popconfirm`, `el-table-column`组件被应用
:::

### 按需使用

``` vue
<template>
  <TableWithAddRows />
</template>

<script setup>
  import {TableWithAddRows} from 'business-ui-alpha'
</script>

```
