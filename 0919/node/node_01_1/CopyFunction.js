var fs = require("fs");

function Copy(src,dest) {
    //1.读文件
    var data = fs.readFile(src,"utf-8",function (err,data) {
        if(err){
            console.log("读取失败");
        }else{
            console.log("读取成功");
            //写文件
            fs.writeFile(dest,data,{flag:"w"},function (err) {
                if(err){
                    console.log("写入失败");
                }else{
                    console.log("写入成功");
                }
            })
        }
    })
}
Copy("1.txt","10.txt");
