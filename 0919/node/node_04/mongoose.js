var mongoose = require("mongoose");

var db = mongoose.connect('mongodb://127.0.0.1:27017/user');
db.connection.on('error', function (error) {
    console.log('数据库连接失败：' + error);
});
db.connection.on('open', function () {
    console.log('数据库连接成功');
});

var PersonSchema = new mongoose.Schema({ 
    name : { type:String }, 
    age  : { type:Number, default:0 },
    gender : { type:String }
},{ 
    collection:'child'
});

var Model = db.model('child',PersonSchema);

//插入数据
// var doc = {
//     name:"lck",
//     age:18
// };

// Model.create(doc, function (err,doc) { 
//     if (err){ 
//         console.log(err); 
//     }else{ 
//         console.log(doc); 
//     } 
// });

Model.find({},function (err,docs) { 
    if(err){
        console.log(err);
    }else{
        console.log(docs);
        //骨架设置的什么才能输出什么
        console.log(docs[0].gender);
    }
 });


Model.update({"name":"lck"},{$set:{"name":"ckk"}},function (err) {
    if(err){
        console.log(err);
    }else {
        console.log("更新成功");
    }
})