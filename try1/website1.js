var http = require('http');
var fs = require('fs');
var path = require('path');

var home = path.join(__dirname, "../public/html/home.html");
var contact = path.join(__dirname, "../public/html/contact.html");
var error = path.join(__dirname, "../public/html/404.html");

var server = http.createServer(function(req, res) {
    console.log('req was made' + req.url);

    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream(home, 'utf-8').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream(contact, 'utf-8').pipe(res);
    } else if (req.url === '/api/ninjas') {
        var ninjas = [{ name: 'ryu', age: 25 }, { name: 'dhanvi', age: 20 }];

        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(ninjas));
    } else {
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream(error, 'utf-8').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('started');