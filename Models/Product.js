//Get npm package Mongoose from node_modules
var mongoose = require('mongoose');

//Create a 'schema' ie a table structure
var Schema = mongoose.Schema;

//Set up the table structure or 'schema'
var ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true}
});

//Export (expose) the Product Model
module.exports = mongoose.model('Product', ProductSchema);