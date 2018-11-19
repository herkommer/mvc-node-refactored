// Get npm package Path from node_modules
var path = require('path');

//Expose Controller ACTION method Index
exports.Index = function(req,res){
    //res.send('Hello from MVC and Node!'); //Test returning a simple text
    res.sendFile(path.resolve('www/Index.html')); 
};