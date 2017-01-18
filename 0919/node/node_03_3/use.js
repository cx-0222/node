//中间件

//1.每个中间键的req，res都是用的同一对象
//2.每个中间键都可以控制流程是否继续执行
//3.如果next传了一个不为null的参数，说明有错误 会终止其他中间件并执行错误处理中间件
//4.一个中间件处理完可以把相应数据传给下一个中间件
//
var express = require("express");
var app = express();

app.use(function (req,res,next) {
    req.money = 100;
    next();
});

app.use(function (req,res,next) {
    req.money -= 20;
    console.log(req.money);
    next("不对，钱少了");
});

//当上一个中间件 已经报错了的时候 这个中间件不会执行
app.use(function (req,res,next) {
    req.money -= 50;
    console.log(req.money);
    next();
});

//错误处理中间件 err 就是上个中间件里next的参数
app.use(function (req,res,next) {
    console.log(err);
    res.end(err);
});

app.listen(8083);