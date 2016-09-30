var
  Shirt = require('../models/Shirt.js')

module.exports = {

  index: function(req, res){
    Shirt.find({}, function(err, shirts){
      res.json(shirts)
    })
  },

  create: function(req, res){
    console.log(req.body);
    Shirt.create(req.body, function(err, shirt){
      res.json(shirt)
    })
  },

  show: function(req, res){
    Shirt.findById(req.params.id, function(err, shirt){
      res.json({message: "This is the shirt you wanted to see", shirt: shirt})
    })
  },

  update: function(req, res){
    Shirt.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, shirt){
      res.json({message: "Here is your updated shirt", shirt: shirt})
    })
  },

  destroy: function(req, res){
    Shirt.findByIdAndRemove(req.params.id, function(err){
      res.send({message: "Shirt has been deleted"})
    })
  }

}
