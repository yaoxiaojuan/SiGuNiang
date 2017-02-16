var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views')
app.set('view engine', 'jade')
app.listen(port)

console.log('四姑娘的拾光开始')

// index page
app.get('/', function(req, res) {
  res.render('index',{
    title: '四姑娘的拾光'
  })
})
// index page
app.get('/', function(req, res) {
  res.render('detail',{
    title: '四姑娘的拾光detail'
  })
})// index page
app.get('/', function(req, res) {
  res.render('admin',{
    title: '四姑娘的拾光admin'
  })
})// index page
app.get('/', function(req, res) {
  res.render('list',{
    title: '四姑娘的拾光list'
  })
})