var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db');
var User = db.model('user');
var Route = db.model('route');
var CheckIn = db.model('checkIn');
var users = require('./routes/user.js');
var checkins = require('./routes/checkin.js');
var routes = require('./routes/route.js');
var app = express();
module.exports = app;

var npmPath = path.join(__dirname, '../node_modules');
var publicPath = path.join(__dirname, '../public');
var browserPath = path.join(__dirname, '../browser');

app.use(express.static(npmPath));
app.use(express.static(publicPath));
app.use(express.static(browserPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./routes'));

var indexHtmlPath = path.join(__dirname, '../public/views/index.html');
app.get('/*', function (req, res) {
    console.log('about to send index', indexHtmlPath);
    res.sendFile(indexHtmlPath);
});
