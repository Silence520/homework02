const request = require('supertest');
const app = require('../app.js');
// const express = require('express');
 describe('后端接口测试', function() {
    it('首页返回值测试', function(done) {
      // assert.equal([1,2,3].indexOf(4), -1);、
      request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(500)
        .end(function(err, res) {
          if (res.body.data=='Hello World!'){
          	 done()
          	}else{
         	 done(new Error('error'))
          	} 
        });


    });
  });