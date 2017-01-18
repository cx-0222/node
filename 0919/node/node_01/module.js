//自己封装模块
//1.引入模块 只有是当前路径的情况下要加./ 否则只需要写模块名称即可
//会自动根据我们module.paths里面的路径数组一直查找
//如果在最后还是找不到才会报错 只要在任何一层找到了就会正常引入使用


//2.我们除了可以在node_modules文件夹中放我们要进入的模块的js之外 我们还可以
//放一个我们要引入模块的名称的文件夹
//默认nodejs会帮我们进入它当中的index.js
//如果想要改变引入必须设置我们的package.json
//这个配置文件，设置"main"属性为我们想要进入的js的名称可以省略"js"
//var home = require("home");
var obj = require("./../node_02/obj");
var express = require("express");
//console.log(home.first);
//console.log(home.second);
//home.third(50);
//var app = obj();
//app.use();
//console.log(module);

