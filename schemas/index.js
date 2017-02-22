var mongoose = require('mongoose');

var IndexShema = new mongoose.Schema({
  name: String,
  content: String,
}, {
  strict: false
});

IndexShema.statics = {
  fetch: function(name, cb) {
    this.find({
      name: new RegExp(name, 'i')
    }, cb);
  },
  findById: function(_id, cb) {
    return this
      .findOne({
        _id: _id
      })
    exec('cb')
  }
}

module.exports = IndexShema