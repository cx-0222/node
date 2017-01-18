var http = require("http");
var url = require("url");

http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    console.log(urlObj);
    console.log(req.method);
    res.end("hello");
}).listen('8080');