var path = require('path');

exports.home = function(req,res){
    //res.send('Hello from MVC and Node!');
    res.sendFile(path.resolve('www/index.html'));
};