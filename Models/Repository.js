////Get npm package Mongoose from node_modules
var mongoose = require('mongoose');

//Set up ConnectionString to MongoDB in mLab
var db_url = 'mongodb://dbuser:passw0rd@ds155663.mlab.com:55663/te4-papp';

//Promises möjliggör att vi försöker göra en connect, om den går bra kan vi fortsätta med 'then'
//Om den inte går bra 'fångar' vi felet med catch
//Vi ska prata mer om Promises
//Aktivera Mongoose Global Promises (man kan använda andra Promisebibliotek)
mongoose.Promise = global.Promise; 

//Försök uppfylla löftet att ansluta till DB
mongoose.connect(db_url, {useNewUrlParser: true})
    .then(function(){
        console.log('Connected to mLab MongoDB');
    })
    .catch(function(error){
        console.log('Error connecting to mLab MongoDB');
        console.log(error);
    });