var db = require('../db/db');


module.exports={
    //获取公告或者新闻
    getNewsOrNotice:function (type,num,fn,errFn) {

        if (num==undefined||num==null||num==''){
            var sql = 'select * from news n,newstype t WHERE n.typeid=t.typeid AND n.typeId='+type+';';
        }else {
            var sql = 'select * from news n,newstype t WHERE n.typeid=t.typeid AND n.typeId='+type+' LIMIT '+ num+';';
        }
        db.query(sql,function (result) {
            return fn(result);
        },function (err) {
            return errFn(err)
        })
    },
    //通过用户名查询数据
    getInfoByName:function (name,fn,errFn) {

    }
};
