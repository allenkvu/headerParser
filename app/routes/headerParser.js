var express = require('express');

var app = express();

module.exports = function(app) {
    app.route('/whoami')
        .get(function(req, res){
            var ipAddress = req.headers['x-forwarded-for'];
            var systemInfo = req.headers['user-agent'];
            var languageInfo = req.headers["accept-language"];
        
            var languageInfoArr = languageInfo.split(","); 
            var systemInfoSpecific = systemInfo.substring(systemInfo.indexOf("(")+1, systemInfo.indexOf(")"));
        
            var dateObj = {"ipaddress": ipAddress, "language": languageInfoArr[0],"software": systemInfoSpecific};
            //console.log(JSON.stringify(req.headers));
            res.send(dateObj);
            
        });

};
/*
app.get('/whoami', function(req, res) {
        
       //var data = req.params.query;
        var ipAddress = req.headers['x-forwarded-for'];
        var systemInfo = req.headers['user-agent'];
        var languageInfo = req.headers["accept-language"];
        
        var languageInfoArr = languageInfo.split(","); 
        var systemInfoSpecific = systemInfo.substring(systemInfo.indexOf("(")+1, systemInfo.indexOf(")"));
        
        var dateObj = {"ipaddress": ipAddress, "language": languageInfoArr[0],"software": systemInfoSpecific};
        //console.log(JSON.stringify(req.headers));
        res.send(dateObj);
    });

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});
*/