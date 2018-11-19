//Get npm packages from node_modules
var express = require('express');
var bodyParser = require('body-parser');

//Get your other code modules (your routes)
var Product = require('./Routes/Product');
var Home = require('./Routes/Home');

//Get your DB connection code (for clarity this is in a separate file)
require('./Models/Repository');

//Get the Express app object to communicate with the Express application
var app = express();

//Set up Express settings for handling text as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set up ROUTES with Express 
app.use('/', Home)
app.use('/products', Product);

//Set up static folder for scripts, images etc. Things not requireing a route
app.use(express.static('www'));

//Get a PORT from the node environment variable in Heroku production
//If no production environment, use a preset value of 4242
var PORT = process.env.PORT || 4242;

//Start the web server!
app.listen(PORT, function(){
    console.log('Server up and running');
});

