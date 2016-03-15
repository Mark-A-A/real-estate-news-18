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
    

    if (!error && response.statusCode == 200) {
    //console.log(html) // Show the HTML for the page. 
      debugger
      $('h3').each(function (i, elem) {
        console.log("scrapping page");
        console.log("this: ", this);
        var articleTitle = $(this).children('a').text();
        var articleURL = $(this).children('a').attr('href');
        console.log("articleTitle: ", articleTitle);
        console.log("articleURL: ", articleURL);
      });
    } else {
      console.log("error: ", error)
    };

  });

  res.redirect('/')
});

module.exports = router;