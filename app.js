var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// GET
app.get('/', function(req, res) {
  res.redirect('/');
});

app.listen(process.env.PORT || 5000, function() {});
