var http = require("http");
var url = require("url");
var fs = require("fs");
//自定义模块
var config = require("./config");
var mongoose = require("mongoose");

var db = mongoose.connect('mongodb://127.0.0.1:27017/user');

var PersonSchema = new mongoose.Schema({
    firstName : { type:String },
    lastName : { type:String },
    password : { type:String }
},{
    collection:'child'
});

var Model = db.model('child',PersonSchema);

http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    if(urlObj.pathname == "/insert"){
        //插入 创建新用户
    }else if(urlObj.pathname == "/update"){
        //更新 编辑用户
        var id = urlObj.query.id;
        var firstName = urlObj.query.firstName;
        var lastName = urlObj.query.lastName;
        Model.update({_id:id},{$set:{firstName:firstName,lastName:lastName}},function (err,doc) {
            if(err){
                console.log(err);
            }else{
                console.log(doc);
                res.end('{"errcode":0,"msg":"更新成功"}')
            }
        });
    }else if(urlObj.pathname == "/list"){
        //遍历获取数据
        var page = urlObj.query.page;
        Model.find({},{},{limit:config.pagesize,skip:config.pagesize*page},function (err,docs) {
            if(err){
                console.log(err);
            }else{
                Model.count({},function (err,count) {
                    if(err){
                        console.log(err);
                    }else{
                        console.log(count);
                        var obj = {};
                        obj.userArr = docs;
                        var countArr = [];
                        var pages = Math.ceil(count/3);
                        for(var i = 0; i < pages; i++){
                            countArr.push(i);
                        }
                        obj.countArr = countArr;
                        console.log(obj);
                        var json = JSON.stringify(obj);
                        res.end(json);
                    }
                });
                console.log(docs);
                //var json = JSON.stringify(docs);
                //res.end(json);
            }
        })
    }else{
        if(urlObj.pathname != "/favicon.ico" && urlObj.pathname != "/angular.min.js.map"){
            fs.createReadStream("."+urlObj.pathname).pipe(res);
        }
    }
}).listen(9090);
