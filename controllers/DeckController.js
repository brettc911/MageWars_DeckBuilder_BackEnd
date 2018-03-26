const Deck = require('../models/deck')

module.exports = {

  find : (params, callback) => {
    Deck.find(params, (err, cards) => {
      if (err) {
        callback(err, null)
        return
      }
      callback(null, cards)
    })
  },

  findById: (id, callback) => {
    Deck.findById(id, (err, card)=> {
      if (err) {
        callback(err, null)
        return
      }
      callback(null, card)
    })
  },

  create: (params, callback) => {
    Deck.create(params, (err, card) => {
      if (err) {
        callback(err, null)
        return
      }
      callback(null, card)
    })
  },

  update: (id, params, callback) => {
    Deck.findByIdAndUpdate(id, params, {new: true}, (err, card) => {
      if (err) {
        callback(err, null)
        return
      }
      callback(null, card)
    })
  },

  destroy: (id, callback) => {
    Deck.findByIdAndRemove(id, (err, card) => {
      if (err) {
        callback(err, null)
        return
      }
      callback(null, card)
    })
  }
}
