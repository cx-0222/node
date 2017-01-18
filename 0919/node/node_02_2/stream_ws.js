var fs = require("fs");

//创建一个写入流
var ws = fs.createWriteStream("1.txt");
ws.write(new Buffer(129*1024),function () {
    console.log("写入成功");
})
