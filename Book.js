var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  author: String,
  title: String,
  category: String
});

module.exports = mongoose.model('Book', BookSchema);

// db.Books.save({"author":"Alison Bechdel", "title":"Fun Home", "category":"Graphic-memoir"});
// db.Books.save({"author":"Alison Bechdel", "title":"Are You My Mother?", "category":"Graphic-memoir"});
// db.Books.save({"author":"Craig Thompson", "title":"Blankets", "category":"Graphic-novel"});
// db.Books.save({"author":"Craig Thompson", "title":"Habibi", "category":"Graphic-novel"});
// db.Books.save({"author":"Daniel Clowes", "title":"Ghost-World", "category":"Graphic-novel"});
// db.Books.save({"author":"Daniel Clowes", "title":"Patience", "category":"Graphic-novel"});
// db.Books.save({"author":"Marguerite Abouet", "title":"Aya of Yop City", "category":"Graphic-novel"});
// db.Books.save({"author":"Marguerite Abouet", "title":"Aya The Secrets Come Out", "category":"Graphic-novel"});