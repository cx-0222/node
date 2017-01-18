//路径模块
var path = require("path");
//1.规范化字符串路径
console.log(path.normalize("/../a///b/c/.././d//"));

//!!! 直接输出就好  返回当前文件所在文件夹的绝对路径
console.log(__dirname);

//将多个参数值字符串结合成一个路径字符串
console.log(path.join(__dirname,'a','b','../','c'));

//把参数解析为一个绝对路径 ??
//1. .表示当前目录 ..表示上级目录
//2.普通字符串代表下一级目录
//3.没有下一个参数 返回当前路径
//4. / 代表盘符的根目录
console.log(path.resolve("./test/index.html"));
console.log(path.resolve("www","static","../gif"));
console.log(path.resolve("../7.fs/img.js"));



