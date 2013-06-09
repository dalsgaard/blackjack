var express = require('express');

var app = express();

app.configure(function() {
  app.use(express.static(__dirname + "/public"));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', { layout: false });
});

app.get('/', function(req, res) {
  res.render('index');
});
app.listen(8320);
