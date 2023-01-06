---
layout: home

hero:
  name: Business Ui
  tagline:  基于Element Plus封装的业务组件库，支持在vue2中使用Element-Ui
  image:
    src: /logo.png
    alt: VitePress
  actions:
    - theme: brand
      text: 快速开始
      link: /getting-started
    - theme: alt
      text: 查看演示
      link: 

features:
  - icon: ⚡️
    title: Vite 构建
    details: 使用vite构建,拥有更快的启动速度与更小的打包结果.
  - icon: 🖖
    title: Type 安全
    details: 全面拥抱 Typescript, 拥有详细的类型与类型工具.
  - icon: 🛠️
    title: Vue5 支持
    details: 支持vue3+vue2 通过预安装钩子,对应使用ElementPlus 或 ElementUi.
  - icon: 🆙
    title: Business 定制
    details: 根据日常工作中使用到的高频复合性页面定制组件.
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>

<style>
  .items{
    justify-content: space-between;
  }
</style>
<VPTeamPage>
  <VPTeamPageTitle>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
</VPTeamPage>


