//引入文件模块
var fs = require('fs');
//创建文件夹 明明创建是0777 可读可写可执行  但为什么简介还是只读
// fs.mkdir("dir",0777,function (err) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("创建成功");
//     }
// })

//读取目录../node_02
// fs.readdir("../node_02",function (err,content) {
//     if(err){
//         console.log(err);
//     }else{
//         //输出该目录下的信息 数组
//         console.log(content);
//     }
// });

//查看文件或者目录详情 ???干嘛使得
// fs.stat("fsdir.js",function (err,stat) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(stat);
//     }
// })

//判断文件是否存在
//fs.exists("dir/1.jpg",function (exists) {
    //输出 true 或 false
    //console.log(exists);
    //if(exists){
       // console.log("文件存在");
    //}else{
        //console.log("文件不存在");
    //}
//})

//相对路径获取绝对路径
// fs.realpath("dir",function (err,path) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(path);
//     }
// })

//修改文件名
// fs.rename("1.txt","2.txt",function (err) {
//     if(err){
//         console.log(err);
//     }
// });
// fs.rename("2.txt","1.txt",function (err) {
//     if(err){
//         console.log(err);
//     }
// })