global.mongooseModel = require('../model/articles.js');

var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var request = require('request');

var cheerio = require('cheerio');
var app = express();

//Static Public Files
app.use(express.static('public'));


// Body-Parser - parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))




//--------------ROUTES----------------------
router.get('/', function (req, res) {
  
  res.render("home")
}); //end of home route

router.get('/scraper', function (req,res){
  request('http://www.nytimes.com/pages/realestate/index.html', function (error, response,  html) {
    var $ = cheerio.load(html);
    // var databaseModelurl = 
    // var collections = [articles]

    if (!error && response.statusCode == 200) {
    //console.log(html) // Show the HTML for the page. 
      debugger
      $('.story').each(function (i, elem) {
      //$('h3').each(function (i, elem) {
        console.log("scrapping page");
        console.log("this: ", this);
        var articleTitle = $(this).children('h3').children('a').text();
        var articleURL = $(this).children('h3').children('a').attr('href');
        var articleThumbnail = $(this).children('.thumbnail').children('a').children('img').attr('src');
        var articleThumbnailText = $(this).children('.thumbnail').children('a').children('img').attr('alt');
        console.log("articleTitle: ", articleTitle);
        console.log("articleURL: ", articleURL);
        console.log("articleThumbnail: ", articleThumbnail);
        console.log("articleThumbnailText: ", articleThumbnailText);

        //mongooseModel.articles.save()
      });
      
    } else {
      console.log("error: ", error)
    };

  });

  res.redirect('/')
});

module.exports = router;