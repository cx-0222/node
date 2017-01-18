var http = require("http");
var url = require("url");
var fs = require("fs");
var server = http.createServer(function (req,res) {
    //请求路径
    console.log(req.url);
    var urlObj = url.parse(req.url,true);
    //req.method 属性得到的全部是大写的单词 所以 如果要进行判断要么直接用大写
    //要么就使用我们字符串的方法转成你想要的大小写类型再判断
    if(req.method == "POST"){
        if(urlObj.pathname == "/reg"){
            //urlObj 无法处理post请求来获取参数
            // console.log(urlObj);
            var str = "";
            req.on("data",function (data) {
                //data为buffer类型
               // console.log(1111);
                //console.log(data.toString());
                //console.log(2222);
                str += data.toString();
            });
            req.on("end",function () {
                //console.log(1111);
                //console.log(url.parse("?"+str,true));
                //console.log(2222);
                var obj = url.parse("?"+str,true);
                //console.log(1111);
                //console.log(obj);
                //console.log(2222);
                var address = "";
                if(obj.query.name == "cx" && obj.query.password == "111"){
                    address = "html/loginSuccess.html";
                }else {
                    address = "html/httpPost.html";
                }
                fs.createReadStream(address).pipe(res);
            })
            //res.end("结束了");
        }
    }else{
        if(urlObj.pathname != "/favicon.ico"){
            fs.createReadStream("."+urlObj.pathname).pipe(res);
        }
    }
});
server.listen(8091);