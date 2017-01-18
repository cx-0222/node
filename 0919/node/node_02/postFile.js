var http = require('http');
var fs = require("fs");
var url = require("url");
//需要手动引入
//npm install formidable
var formidable = require("formidable");

http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    if(urlObj.pathname == "/load"){
        // var str = "";
        //上传文件的时候 这个方法不管用
        // req.on("data",function (data) {
        //     str += data.toString();
        // });
        // req.on("end",function () {
        //     var obj = url.parse("?"+str,true);
        //     console.log(str);
        //     console.log(obj);
        // });
        // res.end("haha");

        var form = new formidable.IncomingForm();
        form.parse(req,function (err,params,files) {
            console.log(err);
            //普通参数
            console.log(params);
            console.log(files);
            fs.createReadStream(files.img.path).pipe(fs.createWriteStream("1.jpg"));
            res.end("上传成功");
        })
    }else{
        if(urlObj.pathname != "/favicon.ico"){
            fs.createReadStream("."+urlObj.pathname).pipe(res);
        }

    }
}).listen(8092);