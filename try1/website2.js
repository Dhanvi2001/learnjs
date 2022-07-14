var express = require('express');
var path = require('path');

var staticPath = path.join(__dirname, '../public');
var home = path.join(__dirname, '../public/ejs/home.ejs');
var contact = path.join(__dirname, '../public/ejs/contact.ejs');
var profile = path.join(__dirname, '../public/ejs/profile.ejs');

var app = express();
app.use(express.static(staticPath));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render(home);
});

app.get('/contact/', function(req, res) {
    res.render(contact);
});

app.get('/profile/:name', function(req, res) {
    var data = { age: 18, position: 'employ', hobbies: ['playing', 'cooking', 'web developing'] };
    res.render(profile, { person: req.params.name, data: data });
});

app.listen(3000);