const express = require('express');
const router = express.Router();

const commentModel = require('../../models/comment');
const projectModel = require('../../models/project');


//评论
router.post('/:projectId', async (req,res,next)=>{
    console.log(req.params);
    console.log(req.body)
    let projectId = req.params.projectId,
        comments = req.body.comment,project,
        time = new Date();
    //插入数据库
    await commentModel.insertComment([comments,time,'1234',projectId]);
    await projectModel.getDetailsById(projectId)
        .then(result=>{
            project=result;
            comments = parseInt(result[0]['comments']) + 1;
        }).catch(err=>{
            console.log(err);
        });
    await projectModel.updateComments([comments,projectId])
        .then(result=>{
            req.flash('success', '留言成功');
        }).catch(err=>{
        console.log(err);
    });
    await commentModel.commentList(projectId)
        .then(re=>{
            res.status(200).send({comments:(comments).toString(),all:re});
        })
        .catch(err=>{console.log(err)})


});

module.exports = router;
