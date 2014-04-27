var express = require('express');

var app = express();

app.get('/api/friends', function(req, res) {
    res.send([{FirstName:'Adam', LastName:'Ścieszko'}, 
    	{FirstName:'Monika', LastName:'Ścieszko'},
    	{FirstName:'Monika', LastName:'Kaniorska'}]);
});

app.configure(function(){
  app.use(express.static(__dirname + '/'));
});

app.listen(3000);
console.log('Listening on port 3000...');