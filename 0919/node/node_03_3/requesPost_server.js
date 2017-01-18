var http = require("http");
var url = require("url");

http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    if(urlObj.pathname == "/post"){
        req.on("data",function (data) {
            console.log(data.toString());
        });
        res.end();
    }
}).listen(8089)