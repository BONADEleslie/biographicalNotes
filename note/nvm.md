- https://blog.csdn.net/QWERTYQ16/article/details/124497532

## nvm的简介、安装、使用

一、nvm是什么？
- nvm是一个node的版本管理工具，可以简单操作node版本的切换、安装、查看。。。等等，与npm不同的是，npm是依赖包的管理工具。


二、nvm的安装。
1.windows包下载地址：点击以下卡片进入我的百度网盘            
百度网盘 请输入提取码  提取码：vg9l
https://pan.baidu.com/s/1EUc-e2Ai-lXXQkjlB8jmlA


三、使用
1.先卸载之前的node.js
2.在刚刚的nvm文件位置打开cmd

3.输入以下代码查看nvm可安装的node版本
<!-- nvm ls                      // 看安装的所有node.js的版本 -->
<!-- nvm list available          // 查显示可以安装的所有node.js的版本 -->


4.安装所对应的版本。
<!-- nvm install 版本号 // 例如：nvm install 14.18.1 -->

5.切换到安装的版本
<!-- nvm use 版本号           // 切换到使用指定的nodejs版本  nvm use 14.18.1 -->  


6.检测是否切换完成，新开一个cmd
<!-- node -v -->


四、nvm的一些命令
```js
nvm install // 安装最新版本
nvm list // 查看已安装版本

nvm use <version> // 切换使用版本

nvm ls // 列出所有版本

nvm current // 显示当前版本

```