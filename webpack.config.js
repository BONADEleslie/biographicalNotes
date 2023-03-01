/*
 * @Author: kevin
 * @Date: 2023-02-28 09:00:00
 * @LastEditors: kevin
 * @LastEditTime: 2023-02-28 09:00:00
 * @Description: 打包配置
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 编译完成生成新的html页面,用于引入动态hash文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader') // 15版本以上的vue-loader需要使用插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 从压缩的js中抽取css部分

// 环境变量
const production = process.env.NODE_ENV == 'production';
// 模式
const mode = production ? { mode: 'production' } : { mode: 'development', devtool: 'source-map' };

const config = {
    // 模式
    ...mode,
    // 构建目标 web应用
    target: 'web', // <=== 默认为 'web'，可省略
    // 基础目录( 绝对路径 )
    // context: path.resolve(__dirname, './src'),
    // 入口
    // entry: './index.js',
    entry: './src/index.js',
    // 出口
    output: {
        path: path.resolve(__dirname, './build/'), // 输出路径
        filename: 'dist/[name]-[fullhash].bundle.js', //加哈希值避免缓存
        chunkFilename: 'dist/[name]-[fullhash].bundle.js', // 支持动态导入
        publicPath: production ? '/web/file/web-html/' : '/'
    },
    // loader
    module: {
        // 编译规则
        rules:[
            // 编译vue文件
            {
                test: /\.vue$/,
                use: [{ loader: "vue-loader" }],
            },
            // 编译样式
            {
                test: /\.(le|c)ss$/,
                use: [
                    // {loader: "style-loader"},
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: "css-loader"},
                    {loader: "less-loader"}
                ]
            }
            // ES6 转 ES5 配合babel使用 
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     },
            // },
        ]
    },
    // 插件
    plugins: [
        new CleanWebpackPlugin(), // 清理文件再打包
        new VueLoaderPlugin(),     // 用来解析.vue文件的
        new HtmlWebpackPlugin({
            title: 'vue 模板', // 用于生成的HTML文件标题
            filename: path.resolve(__dirname, './build/index.html'), //路径文件名 改路径也会作用context
            template: "./public/index.html", // 使用的模板
            inject: "body", //当传入 true或者 ‘body’时所有javascript资源将被放置在body元素的底部，“head”则会放在head元素内
            favicon: './public/favicon.ico', //给定的图标路径，可将其添加到输出html中
            hash: true, //会给所有包含的script和css添加一个唯一的webpack编译hash值。这对于缓存清除非常有用。
        }),
        new MiniCssExtractPlugin({ // 把css单独抽到头部
            // 类似 webpackOptions.output里面的配置 可以忽略
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': production ? JSON.stringify('production') : JSON.stringify('development'),
            // 可以控制新特性
            'AUTHOR': production ? JSON.stringify('kevin_pro') : JSON.stringify('kevin_dev')
        })
    ],
    // 解析
    resolve: {
        // 引入模块时可省略的后缀
        extensions: ['.js', '.vue'],
        // 路径别名 key: path.resolve(__dirname, './src)
        alias: {
            '@': path.resolve(__dirname, './src'),
            'assets': path.resolve(__dirname, './src/assets'),
            'com': path.resolve(__dirname, './src/components'),
        }
    },
    // 开发服务器
    devServer: {
        hot: true, // 热更新
        port: 9999, // 端口
        compress: true, //所有来自 dist文件 gzip 压缩和提供为服务
        // open: true, //是否自动打开窗口
        // history 模式下url会请求服务器，获取不到资源就会报 404
        historyApiFallback: {
            index: '/index.html'
        },
        //解决跨域
        proxy: {
            '/api': {
                target: 'http://14.23.42.2:51422/jdcarshop/web',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}

module.exports = config;