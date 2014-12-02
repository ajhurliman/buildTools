'use strict';

var $ = require('jquery');
var request = require('superagent');
var server = require('../server');

server();

$('#get-greeting').click(function() {
  $.getJSON('http://localhost:3000/greet', function(data) {
    alert(data.greeting);
  });
});
