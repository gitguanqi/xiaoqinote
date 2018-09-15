var Marklist = require('../model/Mark');
var Type = require('../model/Type');

// 便签添加显示
exports.showMarkAdd = (req,res,next) => {
    Type.find(function(err,doc) {
      if(doc) {
        res.render('markadd',{
          type: doc
        });
      }
    })
};

//便签添加操作
exports.MarkAddSet = (req,res,next) => {
  var title = req.body.title,
      name = req.body.type,
      author = req.body.author,
      content = req.body.content;
  Marklist.findOne({title:title},function(err,doc) {
    if(doc) {
        res.json({
          msg: 'find_fail',
          code: 109,
          data: {
            info: '便签已存在！'
          }
        })
    }else {
      Marklist.create({title:title,name:name,author:author,content:content}).then((doc)=>{
        if(doc) {
          res.json({
            msg: 'find_succ',
            code: 200,
            data: {
              info: '便签添加成功！'
            }
          })
        }
      });
    }
  })
}