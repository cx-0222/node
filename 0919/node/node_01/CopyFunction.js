var fs = require("fs");

//自定义一个复制函数
function Copy(src,dest) {
    //读文件
    var data1 = fs.readFile(src,"utf-8",function (err,data) {
        if(err){
            console.log("失败");
        }else{
            console.log(1);
            console.log(data);
            fs.writeFile(dest,data,{
                flag:"w"
            },function (err) {
                if(err){
                    console.log("拷贝失败");
                }else{
                    console.log("拷贝成功");
                }
            })
        }
    });

}
Copy("1.txt","10.txt");