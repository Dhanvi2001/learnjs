var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
    console.log('request was made:' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hey nodejs');
});
fs.writeFileSync('demo.txt', 'Node.js is an open source server environment.', function(err) {
    if (err) throw err;
});
var readme = fs.readFileSync('demo.txt', 'utf-8');
server.listen(3000, '127.0.0.1');
console.log('Yes,3000');
console.log(readme);
fs.writeFileSync('demo.txt', 'Node.js allows you to run Javascript on the server.', function(err) {
    if (err) throw err;
});
fs.rename('demo.txt', 'final-demo.txt', function(err) {
    if (err) throw err;
    console.log('Renamed!');
});
fs.unlink('final-demo.txt', function(err) {
    if (err) throw err;
    console.log('Unlinked!');
});