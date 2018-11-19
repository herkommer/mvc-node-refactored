//Get npm package Express from node_modules
var express = require('express');

//Get Express ROUTER Object
var router = express.Router();

//Get Home Controller Module (your code file)
var HomeController = require('../Controllers/Home');

//Set up Express Default Route '/' pointing to Home Controller and Index Action method
router.get('/', HomeController.Index);

//Expose (export) the router object
module.exports = router;