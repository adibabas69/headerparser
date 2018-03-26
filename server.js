//Basic required import for NodeJS
var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());



//Get CALL to return JSON thats format natural and unix date
app.get("/API/header", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})



const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
  
})