var http = require("http");
var url = require("url");
var fs = require("fs");
var formidable = require("formidable");

//创建服务器
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    if(urlObj.pathname == "/load"){
        var form = new formidable.IncomingForm();
        form.parse(req,function (err,params,files) {
            //错误
            console.log(err);
            //普通input框上传的参数
            console.log(params);
            //上传文件的详情
            //path:表示临时路径
            //name：表示传过来的文件的文件名
            console.log(files);

            //将文件由临时文件变为本地文件
            //fs.createReadStream(files.img.path).pipe(fs.createWriteStream("1.jpg"));
            //需求：将获取到的图片文件放在img下以获取的用户名为名字的文件下
            //1.判断img下有没有这个文件夹
            fs.exists("img/"+params.name,function (exists) {
                if(!exists){
                    //创建文件夹 !! 当前的js文件所在的文件是根目录 所以想要在img下
                    //创建文件夹 必须加img
                    fs.mkdir("img/"+params.name,0777,function () {
                        console.log("创建成功");
                    });
                }
                fs.createReadStream(files.img.path).pipe(fs.createWriteStream("img/"+params.name+"/"+files.img.name));
                res.write("<h1>上传成功</h1>");
                res.end('<img src="'+"img/"+params.name+"/"+files.img.name+'">');
            })
            //res.end("上传成功");
        })


    }else{
        if(urlObj.pathname != "/favicon.ico"){
            fs.createReadStream("."+urlObj.pathname).pipe(res);
        }
    }
}).listen(8086);