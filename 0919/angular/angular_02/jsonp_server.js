var http = require("http");
var url = require("url");
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://127.0.0.1:27017/user');

var PersonSchema = new mongoose.Schema({
    name : { type:String },
    age  : { type:Number, default:0 },
    gender : { type:String }
},{
    collection:'child'
});
var Model = db.model('child',PersonSchema);



var server = http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);

    if(urlObj.pathname == "/finduser"){
        var cb = urlObj.query.callback;
        var name = urlObj.query.name;
        var reg = new RegExp(name);
        Model.find({name:reg},function (err,docs) {
            if(err){
                console.log(err);
            }else{
                console.log(docs);
                var json = JSON.stringify(docs);
                //res.end(json);
                res.end(cb+"("+json+")");
            }
        });
    }

}).listen(9090);

/*
node.js 后台接口文档
用户json请求说明：
请求方式：get方式
请求路径：http://localhost:9090/finduser?name=c&callback=success
请求参数说明：
参数        是否必须       说明
name          否           要进行模糊查询的关键字
callback      是            获取到的数据返回给前端使用的回调函数的名称
返回说明：
正确时返回的json数据显示实例如下：
success([{"_id":"587886e9a9a918c3dfaa33d9","name":"ck","gender":"man","goodslist":[{"price":99,     "goodname":"宝宝金水"}],"age":22},{"_id":"5878871ba9a918c3dfaa33da","name":"cx","gender":"man","goodslist":[{"price":66,"goodname":"去污粉"}],"age":55}])
返回参数说明：
参数     说明     类型
_id      用户主键
 */