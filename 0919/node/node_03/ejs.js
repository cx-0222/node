/**
 * Created by lanou on 17/1/12.
 */
var express = require("express");

var app = express();

app.set('view engine','ejs');
app.set('views',__dirname);

app.get("/",function (req,res) {
    res.render('index',
    {
        name:'tangcaiye',
        age:18,
        user:{
            name:"cx",
            age:22,
            power:333,
            gender:"nv"
        },
        list:[
            1,2,3,4,5
        ]
    });
})
app.listen(8085)