const mongoose = require('mongoose');

var CardSchema = new mongoose.Schema({

  cardName: { type: String, requried: true },
  primaryType: { type: String, requried: true },
  subTypes: { type: Array},
  manaCost: { type: String, requried: true },
  action: { type: String, requried: true },
  castRange: { type: String, requried: true },
  target: { type: String, requried: true },
  schools: { type: Array, requried: true },

  channeling: { type: String },
  defense: { type: Object },
  health: { type: Number },
  armor: { type: Number },
  equipmentSlot: { type: String },
  abilities: { type: Array },
  traits: { type: Array },
  details: { type: String },
})


module.exports = mongoose.model('CardSchema', CardSchema)
