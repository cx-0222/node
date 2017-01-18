var fs = require("fs");

var rs = fs.createReadStream("1.txt");

//读取流 一次读取64个字节
var times = 0;
//输出整个文件 进行使用
var str = "";
//通过注册读取流的data事件 并设置观察者来获取我们一次读取到的数据 64kb大小
//当文件大时 会分多次执行
//读取出来的内容是buffer类型
rs.on("data",function (data) {
    times++;
    str += data.toString();
    console.log(data.toString());
});
//end 事件是在我们文件读取完时会执行一次的方法
//比如我们多次获取出来的数据如果做了保存
// 在我们的end方法中就是合适的输出时机了 因为此时数据已经都读取完毕了
rs.on("end",function () {
    console.log(times);
    console.log(str);
    console.log("读取完成");
})