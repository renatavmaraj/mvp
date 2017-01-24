var mongoose = require('mongoose');


var mongoURL = mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('connected');
});


// make this available to our users in our Node applications

module.exports = db;