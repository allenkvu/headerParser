var express = require('express')

var app = express()

app.get('/whoami', function(req, res) {
        
       //var data = req.params.query;
        var ipAddress = req.headers['x-forwarded-for']
        var systemInfo = req.headers['user-agent']
        var languageInfo = req.headers["accept-language"]
        res.send(req.headers["accept-language"]);
    });

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
