const db = require('../db/db');

module.exports = {
    //发表评论
    insertComment : function(value){
        let _sql = "insert into comments values(0,?,?,?,?)";
        return db.query(_sql,value);
    },
    commentList:function (id) {
        let _sql = 'select*from comments where projectId='+id+' order by createtime desc';
        return db.query(_sql);
    }
};
