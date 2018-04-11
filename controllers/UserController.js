const User = require('../models/user')

module.exports = {

  find : (params, callback) => {
    User.find(params, (err, cards) => {
      if (err) {
        callback(err, null)
        return
      }
      callback(null, cards)
    })
  },

  findById: (id, callback) => {
    User.findById(id, (err, card)=> {
      if (err) {
        callback(err, null)
        return
      }
      callback(null, card)
    })
  },

  create: (params, callback) => {
    User.create(params, (err, card) => {
      if (err) {
        callback(err, null)
        return
      }
      callback(null, card)
    })
  },

  update: (id, params, callback) => {
    User.findByIdAndUpdate(id, params, {new: true}, (err, card) => {
      if (err) {
        callback(err, null)
        return
      }
      callback(null, card)
    })
  },

  destroy: (id, callback) => {
    User.findByIdAndRemove(id, (err, card) => {
      if (err) {
        callback(err, null)
        return
      }
      callback(null, card)
    })
  }
}
