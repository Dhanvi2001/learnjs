var http = require('http');
var fs = require('fs');
var path = require('path');

var staticPath = path.join(__dirname, "../public/html/home.html");
var staticPath1 = path.join(__dirname, "../public/write.txt")

var server = http.createServer(function(req, res) {
    console.log('req was made' + req.url);
    res.writeHead(200, { 'content-type': 'text/html' });

    var myReadStream = fs.createReadStream(staticPath, 'utf-8');
    myReadStream.pipe(res);
});


/*var myReadStream = fs.createReadStream(staticPath, 'utf-8');
var myWriteStream = fs.createWriteStream(staticPath1, 'utf-8');

myReadStream.on('data', function(chunk) {
    console.log('this is the data');
    myWriteStream.write(chunk);
});*/

server.listen(3000, '127.0.0.1');
console.log('Started');