<template>
  <div id="app">
    <router-view></router-view>
    <footer class="footer themeBackgroundColor">
      <span class="themeColor">{{ author }}</span>
      <span>的简历</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    author() {
      // webpack.config.js 配置全局变量
      return `${AUTHOR}`;
    },
  },
};
</script>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
  text-align: var(--theme-align);

  .footer {
    width: 100%;
    height: 100px;
    position: fixed;
    left: 0;
    bottom: 0;
  }
}
</style>


