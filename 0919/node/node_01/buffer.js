//引入这个模块 解决buffer断开的问题
var StringDecoder = require('string_decoder').StringDecoder;
 var decoder = new StringDecoder();


var buf1 = new Buffer(9);
buf1.fill(255,0);
console.log(buf1);
var buf2 = new Buffer([1,255,0xb3]);
console.log(buf2);
var buf3 = new Buffer("刘长凯");
console.log(buf3);
var buf4 = new Buffer([0xe5,0x88,0x98,0xe9,0x95]);
console.log(buf4);
//console.log(buf4.toString());
var buf5 = new Buffer([0xbf,0xe5,0x87,0xaf]);
//console.log(Buffer.concat([buf4,buf5]).toString());

console.log(decoder.write(buf4));
console.log(decoder.write(buf5));

