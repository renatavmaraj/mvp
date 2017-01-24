var mongoose = require('mongoose');

var mongoURL = mongoose.connect('mongodb://localhost/data/db');
//var mongoURL = mongoose.connect('mongodb://10.7.0.3:27107/data/db');

// mongoose.Promise = require('bluebird');
// assert.equal(query.exec().constructor, require('bluebird'));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('connected');
});


// make this available to our users in our Node applications

module.exports = db;