
console.log('articles.js ready');

var mongoose = require('mongoose');


// COnnecting MongoDB
//Defining Schema for our models
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/real-estate-news');

var db = mongoose.connection;

var articleSchema = new Schema({
  title:  String,
  url: String,
});

var article = mongoose.model('nytimes-articles', articleSchema);

var mongooseModel = {
  db: db,
  articles: article
}

module.exports = mongooseModel;