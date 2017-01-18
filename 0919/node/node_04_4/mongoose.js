var mongoose = require("mongoose");

var db = mongoose.connect("mongodb://127.0.0.1:27017/user");

db.connection.on("error",function (error) {
    console.log("连接数据库失败"+error);
});
db.connection.on("open",function () {
    console.log("数据库连接成功");
});

//创建数据库模型骨架  Schema
var PersonSchema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number,default:0},
    gender:{type:String}
},{
    collection:'child'
});
//Model 由Schema构造生成的模型 除了Schema定义的数据库骨架外 还具有数据库操作的行为
var Model = db.model('child',PersonSchema);

//插入数据
// Model.create({name:"cx",age:18},function (err,doc) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(doc)
//     }
// });

//查找数据
// Model.find({name:/l/},function (err,docs) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(docs);
//     }
// });

//更新数据
// Model.update({name:"cx"},{$set:{name:"ckl"}},function (err) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("更新成功");
//     }
// });

//删除数据  符合条件的都删除 不管有几条
// Model.remove({name:"ck"},function (err) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("删除成功");
//     }
// });

// Model.find({name:/l/,$or:[{age:{$gte:22}},{gender:"men"}]},function (err,docs) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(docs);
//     }
// });

Model.find({},{},{})