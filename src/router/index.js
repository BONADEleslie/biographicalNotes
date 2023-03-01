/*
 * @Author: kevin
 * @Date: 2023-02-28 09:00:00
 * @LastEditors: kevin
 * @LastEditTime: 2023-02-28 09:00:00
 * @Description: 路由文件
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "Home" */ '@/views/Home') // 首页

const routes = [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
  ]
  
  const router = new VueRouter({
    mode: 'history',
    routes
  })

export default router;