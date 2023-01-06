export default {
  title: 'VitePress',
  description: 'Just playing around.',
  markdown: {
    theme: 'one-dark-pro',
    lineNumbers: true,
    config: (md) => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-container'), 'demo', {

        validate: function(params) {
          return params.trim().match(/^demo\s+(.*)$/);
        },
      
        render: function (tokens, idx) {
          // console.log(tokens,idx,'22')
          var m = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
          console.log(m,'m',tokens[idx].nesting )
          if (tokens[idx].nesting === 1) {
            console.log('测试',m[1])
            // opening tag
            return `<vp-demo
            demo-height="270px"
            >`;
      
          } else {
            // closing tag
            return '</v-demo>\n';
          }
        }
      });
    }
  },
  cleanUrls: 'with-subfolders',

  themeConfig: {
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
    ],
    siteTitle: 'Business Ui',
    nav: [
      { text: 'Home', link: '/' },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // }
    ],
    sidebar: [
      {
        text: '开发指南',
        items: [
          { text: '快速开始', link: '/getting-started' },
        ]
      },
      {
        text: '组件',
        items: [
          { text: '可编辑表格', link: '/tableWithAddRow' },
          { text: '项目卡片', link: '/tableWithAddRow2' },
          { text: '表单生成器', link: '/tableWithAdd2Row' },
        ]
      }
    ]
  }
}
