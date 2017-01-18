var fs = require('fs');

//直接往不存在的文件中写东西 是可以直接创建这个文件的
//但是如果没有文件夹 则会报错 必须手动创建文件夹后才能写入
var ws = fs.createWriteStream("1.txt");


ws.write(new Buffer(129*1024),function () {
    //成功回调函数 没有任何参数 数据
    console.log("写入成功");
})