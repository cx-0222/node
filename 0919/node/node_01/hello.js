
var http = require('http');
var url = require('url');
//req request 请求头:是浏览器给后台发送请求的所有内容
// res response 响应头:是服务器接收到请求后经过处理要返回相应给浏览器的内容
var server = http.createServer(function (req,res) {

    console.log(req.url);
    //加上第二个参数 得到的URL的query是个对象
    var urlobj = url.parse(req.url,true);
    console.log(urlobj);
    console.log(urlobj.query.name);
    //writer 方法是帮我们向浏览器传递我们要编写的内容
    res.write("<h1>hahah</h1>");
    //end方法是帮我们告诉浏览器我的响应头结束了 我想要传递的消息都ok了 可以停止接收了
    res.end("hello,lanou");
})
server.listen(8080);
/**
 * Created by lanou on 17/1/10.
 */
