var db = require('../db/db');


module.exports={
    //注册
    register:function (value) {
        let _sql = "insert into user values(?,?,?,?,?,?,?,?,?,?);"
        return db.query(_sql,value);
    },
    //登录
    login:function(value){
      let sql = 'select*from user where uname=? and upassword=?'
        return db.query(sql,value);
    },
    //通过用户名查询数据
    getInfoByName:function (name,fn,errFn) {

    },
    getAllUsers:function () {
        let sql = 'select * from user';
        return db.query(sql)
    }
};
