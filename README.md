## XiaoQi Note WebApp

This is a note management system based on Nodejs and MongoDB.

## Document Description

+ [English document](README.md)
+ [Chinese documentation](zh-CN.md)

## Project Part api

**api request address unified prefix:** `http://localhost:3000/api`

+ Notes list(`GET`): `/api/mark/list`
+ Notes information view(`GET`): `/api/mark/info`
+ Note added to display(`POST`): `/api/mark/add`
+ Note editing operation(`PUT`): `/api/mark/edit`
+ Note deletion(`DELETE`): `/api/mark/del`

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