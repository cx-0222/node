var http = require("http");
var formidable = require("formidable");
var url = require("url");
var fs = require("fs");

http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    if(urlObj.pathname == "/load"){
        var form = new formidable.IncomingForm();
        form.parse(req,function (err,params,files) {
            console.log(err);
            //普通input传过来的值 一对象
            console.log(params);
            console.log(files);
            //需求：在img下面 以 用户名 为名称创建文件夹 再将上传的文件放在对应的用户名文件夹下面
            //判断img下面有没有这个文件夹
            //这里是以当前js所在的位置为起始位置
            //所以要查img文件夹下面有没有对应文件 应该在路径前加上img/
            fs.exists("img/"+params.name,function (exists) {
                if(!exists){
                    fs.mkdir("img/"+params.name,0777,function (err) {
                        if(err){
                            console.log("创建失败");
                        }else {
                            console.log("创建成功");
                        }
                    });
                }
                //res 本身就是一个写入流 所以不需要创建成写入流
                //但是这里不一样 所以需要手动创建成写入流才可以运行
                //fs.createWriteStream ！！！ 不能丢
                fs.createReadStream(files.img.path).pipe(fs.createWriteStream("img/"+params.name+"/"+files.img.name));
                res.write("<h1>上传成功</h1>");
                res.end('<img src="'+"img/"+params.name+"/"+files.img.name+'">');
            })
        })
    }else {
        if(urlObj.pathname != "/favicon.ico"){
            fs.createReadStream("."+urlObj.pathname).pipe(res);
        }
    }
}).listen("8095");