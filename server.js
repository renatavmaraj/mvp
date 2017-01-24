//server.js
'use strict';
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./User');
var app = express();
// setting port
var port = process.env.PORT || 8080;

// serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/users', function(req,res){
  //do sometjing
});

app.post('/api/users', function(req,res){
res.send('inside post req')
});

app.listen(port, function() {
  console.log('Listening on http://localhost:' + port);
})