var express = require('express');
var os = require('os');

var app = express();
app.set('view engine', 'ejs');
app.get('/home', function(req, res) {
    res.sendFile(os.homedir + '/learnjs/home.html');
});

app.get('/contact', function(req, res) {
    res.sendFile(os.homedir + '/learnjs/contact.html');
});

app.get('/profile/:name', function(req, res) {
    var data = { age: 15, job: 'baker', hobbies: ['playing', 'cooking', 'swimming'] };
    res.render(os.homedir + '/learnjs/view/profile.ejs', { person: req.params.name, data: data });
});

app.listen(3000);