const express = require('express');

const router = express.Router();

//关于我们
router.get('/about',function(req,res,next){
    res.render('website/about_us',{title:'关于我们'})
});

//联系我们
router.get('/contact',function (req,res,next) {
    res.render('website/contact');
});

//个人中心
router.get('/home',function (req,res,next) {
    res.render('website/home');
});

module.exports = router;
