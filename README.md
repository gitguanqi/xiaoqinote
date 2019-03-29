## XiaoQi Note WebApp

This is a note management system based on Nodejs and MongoDB.

## Document Description

+ [English document](README.md)
+ [Chinese documentation](zh-CN.md)

## Project Part api

**api request address unified prefix: ** `http://localhost:3000`

** For example **: Note background setting: `/admin/set` is this, then api is `http://localhost:3000/admin/set`

+ Notes background editing: `/admin/set/edit`
+ Notes background editing: `/admin/set/edit`
+ Note background add: `/admin/set/add`
+ Note background add: `/admin/set/add`
+ Delete the administrator in the background: `/admin/set/del`
+ Scratch backstage search: `/admin/search`
+ Background login: `/admin/login`
+ Background exit: `/admin/logout`
+ Background login: `/admin/login`
+ Notes list: `/admin/mark/list`
+ Notes information view: `/admin/mark/info`
+ Note added to display: `/admin/mark/add`
+ Note add operation: `/admin/mark/add`
+ Notes edit display: `/admin/mark/edit`
+ Note editing operation: `/admin/mark/edit`
+ Note deletion: `/admin/mark/del`

## Instructions for use

Download the project file to the local and install the dependencies.

```
$ git clone https://github.com/gitguanqi/xqnote.git
$ cd xqnote
$ npm install
```

Running mongodb

```
$ mongod --dbpath=D:\xqnote\db
$ mongo
```

Running the node program

```
$ npm start
```

If the following code appears, the operation is successful.

```
> markapp@0.0.0 start D:\xqnote
> node ./bin/www

Database connect succ!
```

Enter `http://localhost:3000` in the browser to view it.

Background user name: admin, password: 123456

## About the author

Front end development one ~

Interested to follow [@gitguanqi](https://github.com/gitguanqi)

## License

[MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2019 gitguanqi