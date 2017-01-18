/**
 * Created by lanou on 17/1/12.
 */
var express = require("express");
var app = express();

app.use(function (req,res,next) {
    req.money = 100;
    next();
});

app.use(function (req,res,next) {
    req.money -= 20;
    console.log(req.money);
    next("不对村长");
});

app.use(function (req,res,next) {
    req.money -= 50;
    console.log(req.money);
    next();
});

//错误处理中间键
app.use(function (err,req,res,next) {
    console.log(err);
    res.end(err);
});

app.listen(8083);