//自己封装模块
    //第一步 引入自己封装的模块
    //当是当前路径的情况下 要加./ 否则直接写模块的名称即可
var home = require("home");
console.log(home.first);
console.log(home.second);
    //调用自定义模块的方法
home.third(50);

//当home.js 不在当前路径下时 只需要写模块的名字
// 会自动根据module.paths里的路径数组一层层查找
//当最后找不到的时候才会报错 只要在某一层找到了 就会正常引入

//console.log(module);