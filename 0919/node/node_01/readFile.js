var fs = require('fs');

//没有第二个参数 得到一个buffer
var data = fs.readFileSync("1.txt","utf-8");
console.log(data);
//写文件
fs.writeFile("10.txt","heihei",{flag:"a"},function (err) {
    if(err){
        console.log('写入失败');
    }else{
        console.log("写入成功");
        var data = fs.readFileSync("1.txt","utf-8");
        console.log(data);
    }
});


