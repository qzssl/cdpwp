const mysql = require('mysql');
let db = {};

//创建数据池，对于那些在一个连接上只能发送一个查询请求的客户端，使用连接池就可以在同样的时间内发送多个连接请求，从而更有效的使用服务器的资源。
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'cdpwp',
    port:3306
});

// 接收一个sql语句 以及所需的values
// 这里接收第二参数values的原因是可以使用mysql的占位符 '?'
// 比如 query(`select * from my_database where id = ?`, [1])
db.query = function sqlBack(sql,value) {
    //返回一个promise
    return new Promise((resolve,reject)=>{
        pool.getConnection(function (err,connection) {
            if (err){reject(err)}
            else{
                connection.query(sql,value,(err,rows)=>{
                    let result = JSON.stringify(rows)
                    result=JSON.parse(result);
                    // rows = JSON.stringify(rows);//把results对象转为字符串，去掉RowDataPacket
                    // rows = JSON.parse(rows);
                    if (err){reject(err)}
                    else {resolve(result)}
                    //结束会话
                    connection.release();
                })
            }
        })
    })
};

/*var connection = mysql.createConnection({

});
// 连接数据库 这一步不是必须的 因为在query的时候会默认连接
connection.connect(function (err) {
    if (err){ // 如果在这一步抛出错误 请检查数据库配置  比如权限 选中数据库是否存在等等..
        console.log('数据库连接失败',err);
        return;
    }
});
db.query = function sqlBack(sql,fn,errFn) {
    var sql = sql;
    if (!sql)return;
    connection.query(sql,function (err,rows,fields) {
        if (err){
            errFn(err);
            return;
        }
        // console.log(fields);
        rows = JSON.stringify(rows);//把results对象转为字符串，去掉RowDataPacket
        rows = JSON.parse(rows);
        fn(rows);
    });
    connection.end(function (err) {
        if (err){
            return
        }else {
            console.log('关闭连接')
        }
    })
};*/
module.exports = db;
