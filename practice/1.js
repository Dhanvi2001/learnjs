var express = require('express');
var os = require('os');

var app = express();
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render(os.homedir + '/learnjs/practice/view/index.ejs');
});

app.get('/contact', function(req, res) {
    res.render(os.homedir + '/learnjs/practice/view/contact.ejs');
});

app.get('/profile/:name', function(req, res) {
    var data = { age: 15, job: 'baker', hobbies: ['playing', 'cooking', 'swimming'] };
    res.render(os.homedir + '/learnjs/practice/view/profile.ejs', { person: req.params.name, data: data });
});

app.listen(3000);