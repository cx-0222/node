//模块3 : fs 文件模块
var fs = require("fs");
//读取文件 读取成功后执行回调函数
var data = fs.readFile("1.txt","utf-8",function (err,datas) {
    if(err){
        console.log("失败");
    }else{
        console.log("成功");
        //输出的数据是在这 而不是在回调函数外面
        console.log(datas);
    }
});
console.log("我执行了");
//console.log(data);//输出underfined