const db = require('../db/db');


module.exports={
    //获取项目信息
    getBookOrToll:function (current,page,type) {
        let sql = 'select * from project';
        if (type!=0&&type!==undefined){
            sql = sql+' where projectTypeId='+type+' order by projectId desc limit '+(current-1)*page+','+page;
        }else{
            sql = sql+' order by projectId desc limit '+(current-1)*page+','+page;
        }
        return db.query(sql);
    },
    //通过用户名查询数据
    getTotal:function (value) {
        let sql = 'select * from project';
        if (value!==0&&value!==undefined&&value!==null){
            sql=sql+' WHERE projectTypeId='+value;
        }
        return db.query(sql);
    }
};
