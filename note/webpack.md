## webpack-dev-server 服务

webpack-dev-server是webpack官方提供的一个小型Express服务器。使用它可以为webpack打包生成的资源文件提供web服务。

webpack-dev-server 主要提供两个功能：
为静态文件提供服务
自动刷新和热替换(HMR)

## webpack 打包
webpack.config.js是webpack默认的配置文件名，如果我们有一个webpack.dev.config.js配置，又如何让webpack来读取它呢？
只需要在执行打包命令的时候，加一个参数： --config `文件名
webpack --config webpack.dev.config.js

```json
"scripts": {
    "server": "webpack-dev-server", // 开启服务
    "dev": "webpack --config webpack.dev.config.js", // webpack 读取该文件构建打包
    "start": "webpack --config webpack.config.js", // webpack 默认打包该文件
    "build": "cross-env NODE_ENV=production webpack --progress --color" // cross-env NODE_ENV=production 设置环境变量， --progress 进度条 --color 颜色
},
```


安装 "vue-loader": "^15.7.0", 解析 .vue
安装 "vue-templaten-compiler": "^2.6.10", 解析模板

安装 "style-loader,css-loader,sass-loader", 解析样式
（MiniCssExtractPlugin，压缩抽离css）