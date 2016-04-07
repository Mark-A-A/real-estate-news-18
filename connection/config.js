var mongoose = require('mongoose');

//connecting MongoDB
mongoose.connect('mongodb://localhost/real-estate-news');
console.log("connection to mongodb via mongoose made");

var db = mongoose.connection;

module.exports = db;