//模块1：http服务器
    // 引入模块
var http = require("http");
//模块2：url路径模块
var url = require("url");
    //利用它的函数 创建一个HTTP服务器
var server = http.createServer(function (req,res) {
    //req : 请求头 浏览器向后台发送的所有请求内容
    //res : 响应头 服务器接受到请求后经过处理要返回给浏览器的内容
    console.log(req.url);

    res.end("begou");
});
//端口号
server.listen(8181);
