## 小奇便签WebApp

这是一个基于Nodejs和MongoDB搭建的一个便签后台管理系统。

## 文档说明

+ [英文文档](README.md)
+ [中文文档](zh-CN.md)

## 项目部分api

**api请求地址统一前缀：** `http://localhost:3000/api`

+ 便签列表(`GET`): `/api/mark/list`
+ 便签信息查看(`GET`): `/api/mark/info`
+ 便签添加操作(`POST`): `/api/mark/add`
+ 便签编辑操作(`PUT`): `/api/mark/edit`
+ 便签删除(`DELETE`): `/api/mark/del`

## 使用说明

下载项目文件到本地，并且安装依赖包。

```
$ git clone https://github.com/gitguanqi/xqnote.git
$ cd xqnote
$ npm install
```

运行mongodb

```
$ mongod --dbpath=D:\xqnote\db
$ mongo
```

运行node程序

```
$ npm start
```

如果出现下面的代码，说明运行成功。

```
> markapp@0.0.0 start D:\xqnote
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