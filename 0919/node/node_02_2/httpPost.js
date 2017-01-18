var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function (req,res) {
    //console.log(req.url);
    var urlObj = url.parse(req.url,true);

    //请求方式要大写
    if(req.method == "POST"){
        if(urlObj.pathname == "/reg"){
            //获取到的路径内容均为空
            //说明这种方法不适于post请求方式
            //console.log(urlObj);
            var str = "";
            //!!!!获取post请求发送过来的数据
            req.on("data",function (data) {
                //data 表示数据块 为buffer类型
                console.log(1111111);
                console.log(data.toString());
                console.log(333333)
                str += data.toString();
            });
            req.on("end",function () {
                //console.log(str);
                var obj = url.parse("?"+str,true);

                //console.log(obj);
                var address = "";

                if(obj.query.name == "cx" && obj.query.password == "111"){
                    //登录成功跳转到成功页面
                    address = "html/loginSuccess.html";
                }else{
                    //登录失败 留在原页面
                    address = "html/httpPost.html";
                }
                fs.createReadStream(address).pipe(res);
            })
        }
    }else{
        //第一步直接在地址栏输入地址 不是post请求  所以 这个else 是与这个if并列
        if(urlObj.pathname != "/favicon.ico"){
            fs.createReadStream("."+urlObj.pathname).pipe(res);
        }
    }
    //res.end("hello");
}).listen("8094");
