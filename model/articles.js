console.log('articles.js ready');
var mongoose = require('mongoose');

var db = require("../connection/config.js");

var Schema = mongoose.Schema;

//Defining Schema for our models
var articleSchema = new Schema({
  title:  String,
  url: String,
  thumbnailUrl: String
});

var Article = mongoose.model('article', articleSchema);

module.exports = Article;