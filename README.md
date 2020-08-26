### 前言

该项目是基于`vue-admin-template`搭建的后台管理项目。

### 1.风格指南
1. 组件名应该始终是多个单词的。根组件`App`以及`<transition>`、`<component>`之类的Vue内置组件除外。这样可以避免与现有或未来的`HTML`元素冲突。
2. 避免`v-for`与`v-if`共同作用于同一元素上。
3. 单文件组件的文件名和唯一属性`name`推荐以大写首字母进行命名。如`MyComponent.vue`。注册组件在使用时也推荐这种写法。如`<MyComponent></MyComponent>`。
4. 定义路由`router`时，`name`推荐以大写首字母进行命名。而`path`统一用横线连接，不推荐驼峰命名。
5. `props`在单文件中应当使用`kebab-case`。在JavaScript中使用`camelCase`。详见[Prop名大小写](https://cn.vuejs.org/v2/style-guide/index.html#Prop-%E5%90%8D%E5%A4%A7%E5%B0%8F%E5%86%99%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)。



### 路由 权限管理

权限管理配置所有路由 是否展示。
项目路由定义是否是侧边栏。

### Vuex状态管理

### axios请求

### webpack

