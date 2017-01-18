var http = require("http");
var options = {
    host: 'localhost',
    port: '8081',
    path: '/post',
    method:'post',
    headers:{
        'Content-Type':'application/json'
    }
};
var request = http.request(options,function (res) {
   console.log(res);
});

request.write('{"name":"cx","password":111}');
request.end();