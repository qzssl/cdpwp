var express = require('express');
var router = express.Router();

router.get('/',function (req,res,next) {
    res.render('website/project')
});
router.get('/toll',function (req,res,next){
    res.render('website/project_toll',{title:'点亮童心'})
});
router.use('/book',function (req,res,next) {
   res.render('website/project_book',{title:'梦想起航'})
});

router.use('/:projectId',function (req,res,next) {
    res.render('website/project_detail',{title:'项目详情'})
});

module.exports=router;
