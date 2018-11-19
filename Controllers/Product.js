//Get your code module for the Product Model
var Product = require('../models/Product');

//Set up the ACTION methods for this controller linked from the Routes
//--------------------------------------------------------------------------------
exports.Products = function(req,res){
    res.send('Not implemented, should show all products, please fix!');
};

exports.GetProductById = function(req,res){
    Product.findById(req.params.id, function(error, p){
        //Express error handling, sending the error up the chain
        //if not using the next, Express will not know what happened
        //and the error handling breaks
        //This is a Express error handling pattern
        //We included error in the functions parameter above
        //that is how Express knows to handle it
        //error has to be the first argument in the function above
        //second argument is the returned Product Object, we call it 'p' here
        if (error) 
        {
            console.log('GetProductById failed');
            return next(error);
        }
        //All good, send the response
        res.send(p);
    });
};

exports.UpdateExistingProductById = function(req,res){
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function(error){
        if (error) 
        {
            console.log('UpdateExistingProductById failed');
            return next(error);
        }

        res.send('Product updated');
    });
  };

exports.CreateNewProduct = function(req,res){
    var product = new Product({
        name: req.body.name,
        price: req.body.price
    });

    product.save(function(error){
        if (error) 
        {
            console.log('CreateNewProduct failed');
            return next(error);
        }

        res.send('Product created');
    });
}

exports.DeleteProductById = function(req,res){
    res.send('Not implemented yet, please do it!');
};

//--------------------------------------------------------------------------------