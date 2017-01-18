var fs = require("fs");
var data = fs.readFile("1.txt","utf-8",function (err,datas) {
    console.log("成功");
    console.log(datas);
});
console.log("我执行了");
console.log(data);