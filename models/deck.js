const mongoose = require('mongoose');

var DeckSchema = new mongoose.Schema({

  deckName: { type: String, requried: true },
  mage: { type: String }
  cards: { type: Array },
})


module.exports = mongoose.model('DeckSchema', DeckSchema)
