var express = require('express')

var app = express()

app.get('/:query', function(req, res) {
        
       //var data = req.params.query;
        
        //req.send(req.headers['x-forwarded-for']);
    });

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
