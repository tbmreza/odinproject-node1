var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/index', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname + '/about.html'));
});
app.get('/contact-me', function(req, res) {
  res.sendFile(path.join(__dirname + '/contact-me.html'));
});
app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname + '/contact-me.html'));
});

app.listen(8080);
