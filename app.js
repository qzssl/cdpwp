var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var flash = require('connect-flash');
var session = require('express-session');
var settings = require('./settings'); //配置信息

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html',ejs.__express);
//启动视图引擎
app.set('view engine','html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//session中间件
app.use(session({
    secret : settings.cookieSecret,//通过设置secret来计算hash值并放在cookie中，使产生的signedCookie防篡改
    cookie : {maxAge : 1000*60*60*24},//过期时间，过期后cookie中的session id自动删除
    resave : true,
    saveUninitialized : true
}));

// flash 中间件，用来显示通知,flash需要配套express-session使用且需要放在express-session前，flash放在router前
app.use(flash());
//将flash中存入的变量存入res.locals变量中，假如我要在网站中使用flash中存的error和success变量，
// 加可以把它们传入locals变量中，这样所有的模板都可以拿到这个变量。
app.use(function(req,res,next){
    res.locals.user = req.session.user;
    res.locals.success=req.flash('success').toString();
    res.locals.error=req.flash('error').toString();
    next();
});
app.use('/', indexRouter);
// app.use('/users', usersRouter);

module.exports = app;
