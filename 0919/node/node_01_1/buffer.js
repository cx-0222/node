


//buffer 是一个专门存放二进制数据的缓存区类
//创建buffer对象
//1.直接创建长度为12的buffer对象
var buf1 = new Buffer(12);
console.log(buf1);
//fill(填充值，开始位置，结束位置(没有表示全部))
buf1.fill(255,0);//全部用255即十六进制的ff来填充这个长度为12的buffer对象
console.log(buf1);

//2.通过数组创建
var buf2 = new Buffer([1,255,0xb3]);//长度为3
console.log(buf2);

//3.通过字符串创建
var buf3 = new Buffer("刘长凯");
//一个汉字占三个元素 即表示buf3是长度为9的buffer对象
console.log(buf3);
//将buffer转为字符串
console.log(buf3.toString());

var buf4 = new Buffer([0xe5,0x88,0x98,0xe9,0x95]);
console.log(buf4.toString());
var buf5 = new Buffer([0xbf,0xe5,0x87,0xaf]);
console.log(buf5.toString());
// 占用内存较高 并不推荐
//concat 的参数必须是数组
//console.log(Buffer.concat([buf4,buf5]).toString());

//加载string_decoder模块
var StringDecoder = require('string_decoder').StringDecoder;
//使用StringDecoder对象将Buffer对象中的数据转换为字符串
var decoder = new StringDecoder(); 
console.log(decoder.write(buf4));
console.log(decoder.write(buf5));
