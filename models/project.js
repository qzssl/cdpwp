const db = require('../db/db');


module.exports={
    //分页获取项目信息
    getBookOrToll:function (current,page,type) {
        let sql = 'select * from project ';

        if (type!=0&&type!==undefined){
            sql = sql+' where projectTypeId='+type+' order by projectId desc limit '+(current-1)*page+','+page;
        }else{
            sql = sql+' order by projectId desc LIMIT '+(current-1)*page+','+page;
        }
        return db.query(sql);
    },
    //
    getTotal:function (value) {
        let sql = 'select * from project';
        if (value!==0&&value!==undefined&&value!==null){
            sql=sql+' WHERE projectTypeId='+value;
        }
        return db.query(sql);
    },
    //获取项目详情
    getDetailsById:function (id) {
        let sql = 'select * from project p,projecttype t,admin a WHERE p.projectTypeId=t.projectTypeId ' +
            'AND p.adminId = a.adminId AND p.projectId='+id;
        return db.query(sql)
    },

    //更新评论数
    updateComments:function (value) {
        let _sql = "update project set comments=? where projectId=?"
        return db.query(_sql,value);
    },

    //更新阅读数
    updatePv:function (value) {
        let _sql = "update project set pv=? where projectId=?"
        return db.query(_sql,value);
    }
};
