//模块5 ： events事件模块
var events = require("events");
var util = require("util");
function Girl() {
    //创建女神类 拥有 一些事件
}
//第一步：让被监听对象拥有事件方法
//!!!!让女神拥有事件方法 需要继承events模块
util.inherits(Girl,events);

function Boy(name,response) {
    this.name = name;
    this.response = response;
}
//第二步：创建多个监听对象
var boy1 = new Boy("备胎1",function () {
    console.log("吃鸡腿");
});

var boy2 = new Boy("备胎2",function () {
    console.log("吃蛋糕");
});

var boy3 = new Boy("备胎3",function () {
    console.log("死了");
});


var girl = new Girl();

//设置最大的监听对象个数 但只能监听在这之后的内容  在这之前的管不了
//girl.setMaxListeners(1);

//第三步：注册监听事件
//注册事件
girl.on("lee",boy1.response);
girl.addListener("lee",boy2.response);
girl.once("die",boy3.response);

//移除事件
    //移除单个事件
//girl.removeListener("lee",boy1.response);
    //移除所有事件
girl.removeAllListeners("lee");

//第四步 ： 发射监听事件
//发射事件
girl.emit("lee");
girl.emit("die");
girl.emit("lee");
girl.emit("die");