
var http = require("http");

var options = {
    host:"localhost",
    port:"8089",
    path:"/post",
    method:"post",
    headers:{
        "Content-Type":'application/json'
    }
};

//request 函数允许后台发布请求 第一个参数是一个对象或者字符串
var request = http.request(options,function (res) {
    console.log(res);
});
 request.write('{"name":"cx","password":111}');
 request.end();

