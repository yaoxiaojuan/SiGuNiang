var mongoose = require('mongoose');
var IndexShema = require('../schemas/index');
var Index = mongoose.model('Index', IndexShema);

module.exports = Index;