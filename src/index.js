/*
 * @Author: kevin
 * @Date: 2023-02-28 09:00:00
 * @LastEditors: kevin
 * @LastEditTime: 2023-02-28 09:00:00
 * @Description: 打包配置
 */

import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

// Element 全局配置
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });

// 基于 Element 组件封装的组件注册
import commonComp from 'com';
Object.keys(commonComp).forEach(key => Vue.component(key, commonComp[key]))

// style
import 'assets/styles/reset.css';
import 'assets/styles/theme.css';

// 创建实例
new Vue({
    el: '#app',           // 挂载的目标元素
    store,                // 把自定义store放入vue实例
    router,               // 把自定义路由放入vue实例
    render: h => h(App)   // 渲染函数，指定入口组件为App.vue 名字自定义即可
})