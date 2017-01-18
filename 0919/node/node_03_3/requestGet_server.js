/**
 * Created by lanou on 17/1/12.
 */
//服务器端
var http = require("http");
var url = require("url");

http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    //获取到传过来的内容
    console.log(urlObj);
    console.log(req.method);
    res.end("hello");
}).listen(8087);