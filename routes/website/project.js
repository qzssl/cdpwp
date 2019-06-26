const express = require('express');
const router = express.Router();

const projectModel = require('../../models/project');


router.get('/',function (req,res,next) {
    res.render('website/project',{itemId:0})
});
router.get('/toll',function (req,res,next){
    res.render('website/project_toll',{title:'点亮童心',itemId:1})
});
router.get('/book',function (req,res,next) {
   res.render('website/project_book',{title:'梦想起航',itemId:2})
});

router.use('/detail',function (req,res,next) {
    res.render('website/project_detail',{title:'项目详情'})
});

//分页获取项目数据
router.post('/', function (req,res,next) {
    let current = parseInt(req.body.current);
    let page = parseInt(req.body.page);
    let id = parseInt(req.body.itemId);
    console.log(current,page,id)
    Promise.all([
        projectModel.getTotal(id),
        projectModel.getBookOrToll(current,page,id)
    ])
        .then(result=>{
            res.send({total:result[0].length,data:result[1]});
        })
        .catch(err=>{
            console.log(err)
        })
   /* projectModel.getBookOrToll(current,page)
        .then(function (data) {
            console.log(data)
            res.send(data);
        })
        .catch(function (err) {
            console.log(err);
        })*/
});

module.exports=router;
