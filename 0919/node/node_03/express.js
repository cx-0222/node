/**
 * Created by lanou on 17/1/12.
 */
var express = require("express");
var app = express();

app.get("/list",function (req,res) {
    //console.log(req.host);//请求头里取得主机名
   // console.log(req.path);//路径
    //console.log(req.query);//获取get请求参数
    //console.log(req.params);
    res.send("嘿嘿")
})

app.get("/params/:name/:password",function (req,res) {
    console.log(req.params);
})
app.get("/",function (req,res) {
    //res.send("哈喽");
    res.sendFile(__dirname+"/html/express.html");
});

//如果要在路径中使用 * 就要放在最后面
//防止对我们其他逻辑处理产生影响
app.get("*",function (req,res) {
    // if(req.path == "../css/index"){
    //
    // }else {
    //
    // }
    //console.log(req.path);
    //console.log(__dirname+req.path);
    //引入文件
    res.sendFile(__dirname+req.path);
    //res.send("哒哒哒");
})
app.listen("8082");