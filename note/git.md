```
问题一：git使用中遇到的remote：Permission to xxx denied to xxx问题如何解决
remote: Permission to BONADEleslie/biographicalNotes.git denied to 961747132.
fatal: unable to access 'https://github.com/BONADEleslie/biographicalNotes.git/': The requested URL returned error: 403
```
[https://blog.csdn.net/lwc863481702/article/details/78542727]


```
问题二：Failed to connect to github.com port 443: Timed out 超时
取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

```
问题三：OpenSSL SSL_read: Connection was reset, errno 10054的解决方法
不校验服务器的SSL证书没有经过第三方机构的签署
git config --global http.sslVerify "false"
git config --global https.sslVerify "false"
```

查询 git 配置
git config --global -list

查看用户名和邮箱密码
git config user.name
git config user.email
git config user.password

修改用户名和邮箱密码
git config --global user.name "username"
git config --global user.email "email"
git config --global user.password "password"

项目git地址 [https://github.com/BONADEleslie/biographicalNotes]