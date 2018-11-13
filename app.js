var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var product = require('./routes/product.route');
var home = require('./routes/home.route');

var mongoose = require('mongoose');
var db_url = 'mongodb://dbuser:passw0rd@ds155663.mlab.com:55663/te4-papp';
mongoose.connect( db_url, {useNewUrlParser: true}); //depcreated error removed
mongoose.Promise=global.Promise; //vi ska prata promises senare
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);

app.use('/', home)


var PORT = process.env.PORT || 4242;

app.listen(PORT, function(){
    console.log('Server up and running');
});

