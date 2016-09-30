var mongoose = require('mongoose')

shirtSchema = mongoose.Schema({
  type: {type:String, required: true},
  color: String,
  price: {type: Number, required: true},
  size: {type:String, default: "Medium"}
})


var Shirt = mongoose.model('Shirt', shirtSchema)

module.exports = Shirt
