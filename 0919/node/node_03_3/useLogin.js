var express = require("express");
var app = express();

app.use('/login',function (req,res,next) {
    var str = "";
    if(req.query.name != "cx"){
        str = "用户名有问题";
    }
    next(str);
});

app.use('/login',function (req,res,next) {
    var str = "";
    if(req.query.password != 111){
        var str = "密码有问题";
    }
    next(str);
});
//当上面的中间件没有出错的时候 错误处理中间件不执行
app.use("/login",function (err,req,res,next) {
    console.log(err);
    res.end(err);
});

//根据路径来处理客户发来的get请求
app.get("/login",function (req,res) {
    console.log("登录成功");
    res.send("登录成功");
});
app.get("*",function (req,res) {
    if(req.path != "favicon.ico"){
        res.sendFile(__dirname+req.path);
    }
});

app.listen(8084)