const express = require('express');
const router = express.Router();

const projectModel = require('../../models/project');
const newsModel = require('../../models/news');
const commentModel = require('../../models/comment');

router.get('/',function (req,res,next) {
    res.render('website/project',{itemId:0})
});
router.get('/tb/:typeId',function (req,res,next){
    console.log(req.params)
    let itemId = parseInt(req.params.typeId);
    console.log(itemId);
    res.render('website/project_list',{title:itemId==1?'梦想起航':'点亮童心',itemId:itemId})
});

router.get('/detail/:projectId', (req,res,next)=> {
    let id = req.params.projectId;
    let news,project,comment,pv;

    Promise.all([
        newsModel.getNewsOrNotice(1,10),//获取新闻信息
        projectModel.getDetailsById(id)
    ])
        .then(result=>{
            pv = parseInt(result[1][0].pv);
            pv+=1;
            projectModel.updatePv([pv,id])
                .then()
                .catch(err=>{console.log(err)})
            res.render('website/project_detail',{title:'项目详情',project:result[1],news:result[0]});
        })
        .catch(err=>{
            console.log(err);
        })
});

//评论
router.post('/comment',(req,res,next)=>{
    let id = req.body.id;
    commentModel.commentList(id)
        .then(re=>{
            res.send(re)
        })
        .catch(err=>console.log(err))
})

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
