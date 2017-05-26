var express = require('express');
var request = require('request');

// Create our App
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] == 'https'){
    res.redirect('http://' + req.hostname + req.url);
  }else{
    next();
  }
});

// Public directory where the final build is hosted
app.use(express.static('public'));

// Proxy for third party weather api
app.get('/data/2.5/weather', function(req,res) {
  console.log(`Third Pary Api Request -  ${req.url}`);
  var newurl = `http://api.openweathermap.org/${req.url}`;
  request(newurl).pipe(res);
});

// Listen to for incomming requests!!
app.listen(PORT, function(){
  console.log("Express Serve is up on port 3000. Proxy enabled for Weather API.");
});
