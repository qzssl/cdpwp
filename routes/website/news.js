const express = require('express');
const router = express.Router();

const db = require('../../db/db');

router.get('/',function(req,res,next){
    res.render('website/news')
});

const newsModel = require('../../models/news');
//公告
router.get('/notice',function (req,res,next) {
    newsModel.getNewsOrNotice(2)
        .then(function (data) {
            console.log(data)
        })
        .catch(function (err) {
            console.log(err)
        })
});


module.exports = router;
