var express = require('express');
var router = express.Router();

/* GET home page. */
/**
 * get:接收两个参数 路径 和 一个回调函数
 * use: 也是接收两个参数 路径和get的区别是第二个可以放回调函数或者router对象
 * */
router.get('/', function(req, res, next) {
    //公告
    const db = require('../db/db');
    const userModel = require('../models/users');
    // 这里可以同步获取到rows
    userModel.getAllUsers()
        .then((result)=>{
            console.log(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    res.render('website/index', { title: '首页'});
});

router.use('/',require('./website/user'));
// router.use('/',require('./website/main'));
// router.use('/project',require('./website/project'));
// router.use('/donation',require('./website/donation'));
// router.use('/help',require('./website/help'));
// router.use('/information',require('./website/information'));
router.use('/captcha',require('./website/captcha'));
// router.use('/news',require('./website/news'));


module.exports = router;
