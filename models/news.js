const db = require('../db/db');


module.exports={
    //获取公告或者新闻
    getNewsOrNotice:function (id,number) {
         let sql = 'select * from news n,newstype t WHERE n.typeid=t.typeid AND  n.typeId='+id;
        if (number!==undefined&&number!==null&&number!==''){
            sql = sql+' LIMIT '+number;
        }else {
        }
        return db.query(sql);
    },
    //通过用户名查询数据
    getInfoByName:function (name,fn,errFn) {

    }
};
