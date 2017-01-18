//模块4：util工具模块 是提供常用函数的集合
var util = require("util");

//实现继承
function Parent() {
    this.name = "爸爸";
    this.age = 50;
    this.say = function () {
        console.log("注意身体");
    }
}
Parent.prototype.showName = function () {
    console.log(this.name);
}

function Child() {
    //要继承函数内部的使用call或apply
    Parent.call(this);
    this.name = "儿子";
    this.age = 18;
}

//实现继承父类原型中的方法和属性
util.inherits(Child,Parent);
var parent = new Parent();
parent.showName();
parent.say();
var child = new Child();
child.showName();
child.say(); //util的inherits 只继承原型上的方法和属性

//判断是否是字符串
//将对象序列化为字符串
console.log(util.isString(child));//false
console.log(util.isString(util.inspect(child)));//true
