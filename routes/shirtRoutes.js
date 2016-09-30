var
  express = require('express'),
  shirtRoutes = express.Router(),
  shirtsController = require('../controllers/shirtsController')


  shirtRoutes.route('/shirts')
    .get(shirtsController.index)
    .post(shirtsController.create)

  shirtRoutes.route('/shirt/:id')
    .get(shirtsController.show)
    .patch(shirtsController.update)
    .delete(shirtsController.destroy)

  module.exports = shirtRoutes
