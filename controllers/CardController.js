let Card = require('../models/Card')

module.exports = {

  find : (params, callback) => {
    Card.find(params, (err, cards) => {
      if (err) {
        callback(err, null)
        return
      }
      callback(null, cards)
    })
  },

  findById: (id, callback) => {
    Card.findById(id, (err, card)=> {
      if (err) {
        callback(err, null)
        return
      }
      callback(null, card)
    })
  },

  create: (params, callback) => {
    Card.create(params, (err, card) => {
      if (err) {
        callback(err, null)
        return
      }
      callback(null, card)
    })
  },

  update: (id, params, callback) => {
    Card.findByIdAndUpdate(id, params, {new: true}, (err, card) => {
      if (err) {
        callback(err, null)
        return
      }
      callback(null, card)
    })
  },

  destroy: (id, callback) => {
    Card.findByIdAndRemove(id, (err) => {
      if (err) {
        callback(err, null)
        return
      }
      callback(null, null)
    })
  }
}
