const express = require('express');
const router = express.Router();

const userModel = require('../../models/users');
//登录
router.get('/login',function (req,res,next) {
    res.render('website/login')
});
router.post('/login',function (req,res,next) {
    var parame={
        name:req.body.username,
        password:req.body.password,
        vcode:req.body.vcode
    };
    // 校验参数
    try {
        if (!parame.name.length) {
            throw new Error('请填写用户名')
        }
        if (!parame.password.length) {
            throw new Error('请填写密码')
        }
        if (!parame.vcode.length){
            throw new Error('请填写验证码')
        }
        if (parame.vcode!==req.session.captcha) {
            throw new Error('验证码错误')
        }
    } catch (e) {
        req.flash('error', e.message);
        return res.redirect('back')
    }
    userModel.login([parame.name,parame.password])
        .then((result)=>{
            console.log(result);
            if (result){
                let re = result[0];
                req.flash('success', '登录成功');
                // 用户信息写入 session
                delete re.upassword;
                req.session.user = re;
                return res.redirect('/')
            } else {
                req.flash('error', '账号或密码错误');
                return res.redirect('/login')
            }

        })
        .catch((err)=>{
            console.log(err)
        })
});

//注册
router.get('/register',function (req,res,next) {
    res.render('website/register')
});
router.post('/register',function (req,res,next) {
    var info = { username: req.body.username,
        password: req.body.password,
        again_password: req.body.again_password,
        name: req.body.name,
        nickname: req.body.nickname,
        sex:req.body.sex,
        province:req.body.province,
        address: req.body.address,
        post: req.body.post,
        tel: req.body.tel,
        email: req.body.email
    };
    // 校验参数
    try {
        if (!info.username.length) {
            throw new Error('请填写用户名')
        }
        if (!info.password.length) {
            throw new Error('请填写密码')
        }
        if (!info.again_password.length){
            throw new Error('两次密码不一样')
        }
        if (!info.name.length) {
            throw new Error('请填写真实姓名')
        }
    } catch (e) {
        req.flash('error', e.message);
        return res.redirect('/register')
    }
    userModel.register([info.username, info.password,info.name,info.nickname,info.sex,info.province,info.address,
    info.post,info.tel,info.email])
        .then((result)=>{
            console.log(result)
            req.flash('success','注册成功');
            return res.redirect('/register')
        })
        .catch((err)=>{
            if (err.message.match('Duplicate entry')) {
                req.flash('error', '用户名已被占用');
                return res.redirect('/register')
            }else{
                req.flash('error','注册失败');
                return res.redirect('/register');
            }
            console.log(err);
        })
});

//登出
/*router.get('/loginout',function (req,res,next) {
    try{
        req.session.admin = null;
        res.redirect('/');
        /!*res.send({
            status: 1,
            success: '退出成功'
        })*!/
    }catch(err){
        console.log('退出失败', err);
    }
});*/

module.exports = router;
