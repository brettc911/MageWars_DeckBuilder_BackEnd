const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

  userName: {type: String},
  googleId: {type: String},
  password: {type: String},
  decks: {type: Array}

})

module.exports = mongoose.model('UserSchema', UserSchema)
