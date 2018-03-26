//Basic required import for NodeJS
var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

//API url
var api = 'api/whoami/';





//Get CALL to return JSON thats format natural and unix date
app.get(api, function(req, res) {
  
  var language = req.acceptsLanguages();
  var software = req.get('User-Agent');
  var ipaddress = req.ip;
  
  res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software });
  
});



const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
  
})