var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var Index = require('./models/index');
var _ = require('underscore');
var port = process.env.PORT || 3000;
var app = express();

mongoose.connect('mongodb://localhost/demo');
app.set('views', './views/pages');
app.set('view engine', 'jade');
app.listen(port);
app.use(express.static(path.join(__dirname, 'bower_components')));

// index page
app.get('/', function(req, res) {
  console.log("changes");
  Index.fetch('lucky', function(err, list) {
    if (err) return console.error(err);
    res.render('index', {
      title: 'Demo',
      list: list
    })
  })
})