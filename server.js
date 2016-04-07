var db = require('./connection/config.js');

var router        = require('./controller/controller.js');

var PORT              = process.env.PORT || 8000; 

var express           = require('express');

var expressHandlebars  = require('express-handlebars');

var bodyParser          = require('body-parser');

var mongoose            = require('mongoose');

var app = express();
 
//Static Public Files
app.use(express.static('public'));

//Handlebar Templating
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Body-Parser - parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

//______________Routes_________________________
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
app.use("/", router);

//____________Database Connection_____________________

//connecting MongoDB
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});

app.listen(PORT, function (){
  console.log("Listening on Port: ", PORT);
})