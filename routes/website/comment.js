const express = require('express');
const router = express.Router();

const commentModel = require('../../models/comment');
const projectModel = require('../../models/project');


//评论
router.post('/:articleId', (req,res,next)=>{

    let articleId = 0; /*req.params.articleId,
        content = req.request.body.comments,
        name = req.session.user,
        avator = req.session.avator;
    //  moment = moment().format('YYYY-MM-DD HH:mm');*/
    let comments = 0;

    //插入数据库
     commentModel.insertComment([])
        .then(result=>{
            console.log(result[0]);
        }).catch(err=>{
            console.log(err);
        });
     projectModel.getDetailsById(articleId)
        .then(result=>{
            console.log(result[0]['comments'])
            comments = parseInt(result[0]['comments']) + 1;

        }).catch(err=>{
            console.log(err);
        });
    projectModel.updateComments([comments,articleId])
        .then(result=>{
            console.log(result);
            req.body = true;
        }).catch(err=>{
            console.log(err);
            req.body = false;
        });
});

module.exports = router;
