/**
 * Created by cwgraff on 1/8/16.
 */

var express = require('express');
var path = require('path');
//var democrats = require('./json/democrats');
//var republicans = require('./json/republicans');
var candidates = require('./candidates');

var app = express();

app.use(express.static('public'));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/demCans', function(request, response){
    response.send(candidates);
});

//app.get('/repCans', function(request, response){
//    response.send(republicans);
//});

app.listen(3000, function(){

    console.log('Listening on Port 3000');

});