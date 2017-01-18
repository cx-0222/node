var events = require("events");
var util = require("util");

function Dashen() {
    
}

util.inherits(Dashen,events);
//观察者
function Cai(fn) {
    this.say = fn;
}

var dashen = new Dashen();
var cai1 = new Cai(function () {
    console.log("你是都比请来的猴子么?");
});

var cai2 = new Cai(function () {
    console.log("你是猴子请来的都比么？");
});


var cai3 = new Cai(function () {
    console.log("enhaeng？");
});

//设置最大监听者个数 只能监听之后设置的内容
//虽然会报错 但是仍会执行
//dashen.setMaxListeners(1);
dashen.once("play",cai1.say);
dashen.addListener("play",cai2.say);
//dashen.setMaxListeners(1);
dashen.addListener("play",cai3.say);
//dashen.removeListener("play",cai3.say);
dashen.removeAllListeners("play");
console.log(1);
dashen.emit("play");
dashen.emit("play");
console.log(2);