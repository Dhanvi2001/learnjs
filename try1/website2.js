var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var staticPath = path.join(__dirname, '../public');
var home = path.join(__dirname, '../public/ejs/home.ejs');
var contact = path.join(__dirname, '../public/ejs/contact.ejs');
var profile = path.join(__dirname, '../public/ejs/profile.ejs');
var contact_sucess = path.join(__dirname, '../public/ejs/contact_sucess.ejs');

var app = express();
app.use(express.static(staticPath));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render(home);
});

app.get('/contact', function(req, res) {
    res.render(contact, { qs: req.query });
});

app.post('/contact', urlencodedParser, function(req, res) {
    console.log(req.body);
    res.render(contact_sucess, { data: req.body });
});

app.get('/profile/:name', function(req, res) {
    var data = { age: 18, position: 'employ', hobbies: ['playing', 'cooking', 'web developing'] };
    res.render(profile, { person: req.params.name, data: data });
});

app.listen(3010);