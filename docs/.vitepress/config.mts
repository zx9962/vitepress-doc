import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// base:'/docs/',
export default defineConfig({
  title: "My Awesome Project",
  description: "张晓宇的个人文档",   // 浏览器检索关键字
  head:[
    [
      "link",
      {
        rel: "icon",
        type: "image/png+xml",
        href: "../img/logo.png",
      },
    ],
  ],
  cleanUrls: true, // 路由地址隐藏.html
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "../img/logo.png",
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '前端相关',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Next3',
        items: [
          { text: 'Next3入门', link: '/next3/index.md' },
        ]
      },
      {
        text: '疑难杂症',
        items: [
          { text: 'Node版本与Npm不一致', link: '/problem/node.md' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: "本站所有内容均为原创，转载请注明出处",
      copyright: "Copyright © 2025.4-present zhangxiaoyu",
    },
  }
})
