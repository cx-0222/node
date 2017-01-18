var http = require("http");
var options = { 
    host: 'localhost', 
    port: '8080', 
    path: '/reg?name=cx&password=111', 
    method:'get', 
    headers:{ 
            'Content-Type':'application/json'
        }
};
var request = http.request(options,function (res) {
    //console.log(data);
    //状态
    //console.log(res.statusCode); 
    //获取响应回来的内容  res.setEncoding('utf8')
    // 设置了这个就不需要用 toString()来转换
    res.setEncoding('utf8'); 
    res.on('data', function (data) {  
        console.log(data); 
    });
    res.on('end', function (data) {
        console.log("OK啦");
    });
});

request.end();