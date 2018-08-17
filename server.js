const express = require('express');
const app = express();

var port = process.env.PORT || 8080;

app.use(express.static('client/public'))

app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.listen(port, function(){
  console.log('Our app is running on http://localhost:' + port))
});