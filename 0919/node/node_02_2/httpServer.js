var http = require('http');
//创建服务器
var url = require("url");
var fs = require("fs");
var server = http.createServer(function (req,res) {
    //console.log(req.url);//请求路径
    console.log(req.method);//请求方法 !!!!注意是大写
    var urlObj = url.parse(req.url,true);
    //console.log(urlObj);//对象
    console.log(urlObj.pathname);
    if(urlObj.pathname == "/login"){
        var name = urlObj.query.name;
        var pass = urlObj.query.password;
        if(name == "cx" && pass == "111"){
            console.log("登录成功");
            res.end("登录成功");
        }else {
            console.log("登录失败");
            res.end("登录失败");
        }
    }else{
        //当路径为 favicon.ico时  会报不存在的错误
        //所以先行判断  除了这个路径 其他路径均输出
        if(urlObj.pathname != "/favicon.ico"){
            //可能会使 login.html中引入的css文件 或者 js文件
            //所以 服务器必须将这些文件的内容导出
            //响应流本身就是一个写入流
            fs.createReadStream('.'+urlObj.pathname).pipe(res);
        }
    }

});
server.listen(8093);