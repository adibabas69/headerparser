//Basic required import for NodeJS
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require('express-useragent');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

//API url
var api = 'api/whoami/';





//Get CALL to return JSON thats format natural and unix date
app.get(api, function(req, res, next) {
  
  var language = req.acceptsLanguages();
  var software = req.useragent;
  var ipaddress = req.ip;
  
  res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software });
  
});



const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
  
});