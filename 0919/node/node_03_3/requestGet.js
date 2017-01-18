/**
 * Created by lanou on 17/1/12.
 */
//http模拟客户端
//    相当于我们的浏览器
//    在服务器启动的时候 向服务器发送请求
    //!!! 当服务器没有开启的时候 会报错  不接受请求！！
//    并接收输出 服务器传过来的信息

var http = require("http");
var options = {
    host:'localhost',
    port:"8087",
    path:"/reg?name=cx&password=111",
    method:"get",
    headers:{
        'Content-Type':'application/json'
    }
};

var request = http.request(options,function (res) {
    //console.log(data.toString());
    //res.setEncoding("utf8");
    res.on("data",function (data) {
        console.log(data.toString());
    });
    res.on("end",function (data) {
        console.log("ok啦");
    })
});
//结束请求体 真正向服务器发送请求
request.end();