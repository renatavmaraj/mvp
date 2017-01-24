//server.js
'use strict';
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var bodyParser = require('body-parser');
var User = require('./User');
var db = require('./config.js')
var Book = require('./Book');
var app = express();
// // setting port
//   mongoose.Promise = require('bluebird');
//     assert.equal(query.exec().constructor, require('bluebird'));

var port = process.env.PORT || 8080;

// serving static files
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/users', function(req,res){
  //do sometjing
});

app.post('/api/users', function(req,res){
res.send('inside post req')
});

app.post('/api/books', function(req,res){
  console.log("INSIDE POST REQ")
  console.log("rebody", req.body)
  new Book ({
    author: req.body.author,
    title: req.body.title,
    category: req.body.category
  })
  .save(function(err,doc){
    if(err){res.json(err)}
    else res.send("Inserted Successfully")
  })
})

app.get('/api/books', function(req,res){
    Book.find({}).exec(function(err, books) {
      console.log("Books", books)
      res.status(200).send(books);
    });
});

app.listen(port, function() {
  console.log('Listening on http://localhost:' + port);
})