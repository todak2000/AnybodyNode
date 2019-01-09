var express = require('express');
var request = require('request');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('search');
});

app.get('/results', function(req, res){
    var query = req.query.search;
    // var query = "Nigeria";
    // $url= "https://www.googleapis.com/customsearch/v1?key=AIzaSyATF24vZ97D7lbdQ1zPuxfJcGvJDQhLh0A&cx=009130427976801447388:athkuwtwhli&q=".$query."&fields=items(title,snippet,pagemap/cse_image)" ;
    var url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyATF24vZ97D7lbdQ1zPuxfJcGvJDQhLh0A&cx=009130427976801447388:athkuwtwhli&q=' + query + '&fields=items(title,snippet,cse_thumbnail)';
    //var url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyATF24vZ97D7lbdQ1zPuxfJcGvJDQhLh0A&cx=009130427976801447388:athkuwtwhli&q=' + query ;
    // var url = 'https://www.omdbapi.com/?s=' + query + '&apikey=42adbde8';
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body)
            console.log(data);
            res.render('results', {data: data});
        }
    });
});

 app.listen(3000, function(){
     console.log('Anybody app started on port: 3000');
 });
