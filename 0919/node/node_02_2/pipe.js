var fs = require("fs");
//pipe 连接两个数据流 犹如导管一样读入写入
fs.createReadStream("10.txt").pipe(fs.createWriteStream("1.txt"));