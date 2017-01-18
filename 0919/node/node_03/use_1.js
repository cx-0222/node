/**
 * Created by lanou on 17/1/12.
 */
var express = require("express");
var app = express();

app.use('/reg',function (req,res,next) {
    var str = "";
    if(req.query.name != "cx"){
        str = "用户名有问题"
    }
    next(str);
});

app.use('/reg',function (req,res,next) {
    var str = "";
    if(req.query.password != 111){
        str = "密码有错误";
    }
    next(str);
});

app.use('/reg',function (req,res,next) {
    var str = "";
    if(req.query.age > 200){
        str = "你真老";
    }
    next(str);
});

app.use('/reg',function (req,res,next) {
    var str = "";
    if(req.query.gender != "男" && req.query.gender != "女"){
        str = "那你是啥";
    }
    next(str);
});

app.use('/reg',function (err,req,res,next) {
    console.log(err);
    res.end(err);
});

app.get("/reg",function (req,res) {
    console.log("注册成功");
    res.send("注册成功");
});

app.get("/",function (req,res) {
    res.end("到我这了");
});

app.get("/login",function (req,res) {
//
})

app.get("*",function (req,res) {
    if(req.path != "favicon.ico"){
        res.sendFile(__dirname+req.path);
    }

})

app.listen(8084);
