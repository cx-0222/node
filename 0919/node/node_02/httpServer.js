var http = require("http");
var fs = require("fs");
//处理路径 util是处理继承问题的
var url = require("url");
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    console.log(urlObj.pathname);
    if(urlObj.pathname == "/login"){
        var name = urlObj.query.name;
        var pass = urlObj.query.password;
        var result = "";
        if(name == "cx" && pass == "111"){
            console.log("登录成功");
            result = "登录成功";
            //res.end("success");
        }else{
            console.log("登录失败");
            result = "登录失败";
            //res.end("fail");
        }
        res.end(result);
    }else if(urlObj.pathname == "/reg"){

    }else{
        //响应头本身就是一个写入流
        if(urlObj.pathname != "/favicon.ico"){
            fs.createReadStream("."+urlObj.pathname).pipe(res);
        }
    }
    // else if(urlObj.pathname == "/index.css"){
    //     fs.createReadStream("."+urlObj.pathname).pipe(res);
    // }
    // else if(urlObj.pathname == "/index.js"){
    //     fs.createReadStream("."+urlObj.pathname).pipe(res);
    // }
}).listen("8090");