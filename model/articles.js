
console.log('articles.js ready');


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/real-estate-news');

var db = mongoose.connection;


var articleSchema = new Schema({
  title:  String,
  author: String,
});

var mongooseModel = {
  db: db,
  articles: articleSchema
}

module.exports = mongooseModel;