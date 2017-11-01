const mongoose = require('mongoose');

var CardSchema = new mongoose.Schema({

  cardName: { type: String, requried: true },
  primaryType: { type: String, requried: true },
  subTypes: { type: Array},
  manaCost: { type: String, requried: true },
  action: { type: String, requried: true },
  castRange: { type: String, requried: true },
  target: { type: String },
  schools: { type: Array },
  armor: { type: Number },
  health: { type: Number },
  defense: { type: String },
  channeling: { type: String },
  equipmentSlot: { type: String },
  abilities: { type: Array },
  traits: { type: Array },
  details: { type: String },
})


module.exports = mongoose.model('CardSchema', CardSchema)
