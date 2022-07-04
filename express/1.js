var express = require('express');
var os = require('os');

var app = express();

app.get('/home', function(req, res) {
    res.sendFile(os.homedir + '/learnjs/home.html');
});

app.get('/contact', function(req, res) {
    res.sendFile(os.homedir + '/learnjs/contact.html');
});

app.listen(3000);