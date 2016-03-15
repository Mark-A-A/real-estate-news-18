var PORT = 8000; 

var express = require('express');

var expressHandlebars  = require('express-handlebars');

var bodyParser= require('body-parser');

var app = express();
 
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(PORT, function (){
  console.log("Listening on Port: ", PORT);
})