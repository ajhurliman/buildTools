'use strict';

var express = require('express');
var app = express();

module.exports = function(){
  app.set('port', process.env.PORT || 3000);
  app.listen(app.get('port'), function() {
    console.log('server running on port: %d', app.get('port'));
  });

  app.get('/greet', function(req, res) {
    res.json({greeting: "Hello world"});
  });

  app.use(express.static(__dirname));
};
