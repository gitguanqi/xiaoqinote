## 小奇便签WebApp

这是一个基于Nodejs和MongoDB搭建的一个便签后台管理系统。

## 文档说明

+ [英文文档](README.md)
+ [中文文档](zh-CN.md)

## 项目部分api

**api请求地址统一前缀：** `http://localhost:3000`

**例如**：便签后台设置: `/admin/set`是这个，那么api就是`http://localhost:3000/admin/set`

+ 便签后台编辑: `/admin/set/edit`
+ 便签后台编辑: `/admin/set/edit`
+ 便签后台添加: `/admin/set/add`
+ 便签后台添加: `/admin/set/add`
+ 便签后台删除管理员: `/admin/set/del`
+ 便签后台便签搜索: `/admin/search`
+ 后台登录: `/admin/login`
+ 后台退出: `/admin/logout`
+ 后台登录: `/admin/login`
+ 便签列表: `/admin/mark/list`
+ 便签信息查看: `/admin/mark/info`
+ 便签添加显示: `/admin/mark/add`
+ 便签添加操作: `/admin/mark/add`
+ 便签编辑显示: `/admin/mark/edit`
+ 便签编辑操作: `/admin/mark/edit`
+ 便签删除: `/admin/mark/del`

## 使用说明

下载项目文件到本地，并且安装依赖包。

```
$ git clone https://github.com/gitguanqi/xqnote.git
$ cd xqnote
$ npm install
```

运行mongodb

```
$ mongod --dbpath=<文件file绝对路径>\db
$ mongo
```

运行node程序

```
$ npm start
```

如果出现下面的代码，说明运行成功。

```
> markapp@0.0.0 start D:\And\documents\webdev\nodejs\xqnote
> node ./bin/www

database connect succ!
```

在游览器输入`http://localhost:3000`查看。

后台用户名：admin,密码：123456

## 关于作者

前端开发一枚~ 

感兴趣可以关注[@gitguanqi](https://github.com/gitguanqi)

## License

[MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2019 gitguanqi