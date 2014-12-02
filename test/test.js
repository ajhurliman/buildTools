'use strict';
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
var request = require('superagent');
var server = require('../build/server.js');
server();

describe('a greeting retriever', function(){
  it('should get a greeting', function(done) {
    request.get('localhost:3000/greet')
      .end(function(res){
        expect(res.body.greeting).to.eql("Hello world");
        done();
      });
  });
});
