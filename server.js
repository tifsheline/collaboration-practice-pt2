var
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  shirtRoutes = require('./routes/shirtRoutes.js')

  // connection to mongo db:
  mongoose.connect('mongodb://localhost/shirt', function(err){
    if(err) {
      console.log("Problem connecting to Mongo.")
    } else {
      console.log("Connected to Mongo.")
      
    };
  });

  app.get('/', function(req, res){
    res.sendFile('index.html', {root: __dirname})
  })

  function ourLogger(req, res, next){
    console.log(req.method, req.url);
    next()
  }

  function ourMiddleware(req, res, next){
    console.log("Passing through our middleware...and continuing!");
    next();
  }

  app.use(ourLogger);
  app.use(ourMiddleware);
  app.use(bodyParser.json());

  // connects shirtRoutes.js to server.js
  app.use('/', shirtRoutes);

  app.listen(3000, function(){
    console.log("Server is running on port 3000.")
  })
