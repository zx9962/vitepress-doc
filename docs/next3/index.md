# Nuxt3

## 基础

### Nuxt3安装命令

~~~js
npx nuxi@latest init <project-name>
~~~

### 安装element-plus

~~~js
npm install element-plus --save
npm install @element-plus/icons-vue
npm install @element-plus/nuxt -D

// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@element-plus/nuxt' // 添加 Element Plus 模块
  ],
  css: [
    'element-plus/dist/index.css', // 添加 Element Plus 的全局样式
    'element-plus/theme-chalk/display.css' // 可选：添加主题样式
  ]
})

//使用图标
import { Document } from '@element-plus/icons-vue'

//按需加载
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  vite: {
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
})
~~~



## 服务端

### 启动mysql

~~~js
mysql -u root -p   启动mysql
~~~




