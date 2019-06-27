const db = require('../db/db');

module.exports = {
    //发表评论
    insertComment : function(value){
        let _sql = "insert into comments values(?,?,?,?,?);"
        return query(_sql,value);
    }
}
