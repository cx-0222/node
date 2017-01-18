var fs = require("fs");

//计数器 129 分三次读取 每次读64个字节
var times = 0;
//创建一个读取流
var rs = fs.createReadStream("1.txt");
//一次性取出文件内容
var str = "";
//给读取流 注册事件
rs.on("data",function (data) {
    times++;
    str += data.toString();
    console.log(data.toString());
})
//结束时函数
rs.on("end",function () {
    console.log(times);
    console.log(str);
    console.log("读取完成");
})