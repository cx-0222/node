//模板引擎
var express = require("express");
var app = express();

//指定渲染模板引擎
app.set("view engine","ejs");
//设置放模板文件的目录
app.set("views",__dirname);

app.get("/",function (req,res) {
    //默认模板文件后缀格式是ejs
    //render(view,{locals},callback)
    //view 模板
    //locals 传入模板的变量值 在模板中可以使用
    res.render('index',{
        name:'cx',
        age:18,
        goodslist:{
            goodName:"宝宝金水",
            price:99
        },
        list:[
            1,2,3,4
        ]
    });
});
app.listen(8085);