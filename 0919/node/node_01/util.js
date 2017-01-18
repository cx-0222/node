var util = require("util");
function Person(name) {
    this.name = name;
}

function Child(name) {
    Person.call(this,name);
}
Person.prototype.say = function () {
    console.log(this.name);
}

util.inherits(Child,Person);
Child.prototype.say = function () {
    console.log("hahah");
}
var child = new Child("cx");
child.say();
var person = new Person("lck");
person.say();

console.log(child);
console.log(util.inspect(child));

console.log(util.isString("ddddd"));
console.log(util.isString([]));