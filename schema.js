const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  country: String,
});

module.exports = mongoose.model('user', userSchema);
