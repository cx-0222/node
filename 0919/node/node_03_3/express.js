/**
 * Created by lanou on 17/1/12.
 */
//express 简洁而灵活的node.js Web应用框架

var express = require("express");
//初始化
var app = express();

//1.get方法：① 根据请求路径来处理客户发出的get请求
//!!! 在浏览器输入路径的时候 是 get 后面的路径
app.get("/list",function (req,res) {
//   req : 表示请求信息
//    res ： 表示响应信息
    //console.log(req.params);//空对象
    res.end("hello");
});


 app.get("/",function (req,res) {
     res.end("bbbb");
 });

//* 表示任何 要放在最后面 否则会出bug
app.get("*",function (req,res) {
    res.sendFile(__dirname+req.path);
    //res.send("哈哈");
});

//② 直接在地址栏以这种形式输入
//http://localhost:8088/params/cx/111
// 会自动转换为get路径
app.get("/params/:name/:password",function (req,res) {
    console.log(req.params);
});
app.listen("8088");
