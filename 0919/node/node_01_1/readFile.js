//引入模块 fs 文件模块
var fs = require("fs");

//同步读取文件 没有第二个参数得到的是一个buffer
var data = fs.readFileSync("1.txt","utf-8");
console.log(data);
//异步读文件
var data1 = fs.readFile("1.txt","utf-8",function (err,datas) {
    console.log("成功");
    console.log(datas);
});

//写文件
fs.writeFile("1.txt","efg",{flag:"a"},function (err) {
    if(err){
        console.log("写入失败");
    }else{
        console.log("写入成功");
        var data = fs.readFileSync("1.txt","utf-8");
        console.log(data);
    }
})
