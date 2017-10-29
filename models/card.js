const mongoose = require('mongoose');

var CardSchema = new mongoose.Schema({

  cardName: { type: String, requried: true },
  primaryType: { type: String, requried: true },
  subType: { type: Array, default: [] }
  // manaCost: { type: String, requried: true },
  // action: { type: String, requried: true },
  // castRange: { type: String, requried: true },
  // target: { type: String },
  // schools: [{ name: String, level: String  }],
  // armor: { type: Number },
  // health: { type: Number },
  // defense: { type: String },
  // equipmentSlot: { type: Array },
  // abilities: [
  //   {name: { type: String }, action: { type: String }, attackType: { type: String }, range: { type: String }, dice: { type: Number }, effect: { type: Boolean }, effectDescription: { type: String }, attackModifier: { type: Array } },
  //   {name: { type: String }, action: { type: String }, attackType: { type: String }, range: { type: String }, dice: { type: Number }, effect: { type: Boolean }, effectDescription: { type: String }, attackModifier: { type: Array } },
  //   {name: { type: String }, action: { type: String }, attackType: { type: String }, range: { type: String }, dice: { type: Number }, effect: { type: Boolean }, effectDescription: { type: String }, attackModifier: { type: Array } }
  // ],
  // description: { type: String },
})


module.exports = mongoose.model('CardSchema', CardSchema)
