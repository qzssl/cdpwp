const express = require('express');
const router = express.Router();

//验证码
let captcha = require('svg-captcha');

router.get('/',(req,res)=>{
    let codeConfig = {
        size: 4,// 验证码长度
        ignoreChars: '0o1i', // 验证码字符中排除 0o1i
        noise: 2, // 干扰线条的数量
        height: 44, // 高度
        width:100,
        fontSize: 48, // 字体大小
    };
    const cap = captcha.create(codeConfig);
    req.session["captcha"] = cap.text; // session 存储
    // console.log(cap,req.session.captcha);
    res.type('svg'); // 响应的类型
    res.send(cap.data);
});
module.exports = router;
