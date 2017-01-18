
var fs = require("fs");

//将10.txt文件的内容复制到1.txt中
fs.createReadStream("10.txt").pipe(fs.createWriteStream("1.txt"));