# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.


vue3知识点
-- 1. vite配置相对引入
   *  vite.config.ts 文件中增加代码如下
   ```js
   module.exports = {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
   }
   ```
-- 2.引入json-server进行mock数据
-- 3.引入qs序列化参数
-- 4.创建过滤空参数的公共方法
-- 5.watchEffect 立即执行传入函数，同时追踪函数中用到的依赖，后续依赖变更时及时追踪