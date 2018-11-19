//Get npm package Express from node_modules
var express = require('express');

//Get Express Router Object
var router = express.Router();

//Get Product Controller Module (your code file)
var ProductController = require('../Controllers/Product');

//Setting up CRUD Routes
//-----------------------------------------------------------------
//GET Routes
router.get('/', ProductController.Products);
router.get('/:id', ProductController.GetProductById);

//POST Routes
router.post('/', ProductController.CreateNewProduct);

//PUT Routes
router.put('/:id', ProductController.UpdateExistingProductById);

//DELETE Routes
router.delete('/:id', ProductController.DeleteProductById);

//------------------------------------------------------------------

//Export (expose) the router object (nothing else)
module.exports = router;