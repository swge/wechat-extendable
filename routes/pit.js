var express = require('express');
var router = express.Router();
var envConfig = require('../config/env.config');
var routerService = require('../services/pit-router-service');
var questionGamaService = require('../services/question-game-service');
var winston = require('winston');

function checkSignature(params){
  var key=[envConfig.TOKEN,params.timestamp,params.nonce].sort().join(''); 
  var sha1=require('crypto').createHash('sha1');
  sha1.update(key);
  return sha1.digest('hex') ==params.signature;
}

/* Weixin validation */
router.get('/', function(req, res, next) {
  if(!checkSignature(req.query)){
    res.end('signature fail');
  } else {
    res.end(req.query.echostr);
  }
});

router.post('/', function(req, res) {
  // if(!checkSignature(req.query)){
  //   res.end('signature fail');
  // } else {
    var content = routerService.router(req.body.xml, req.app);
    winston.log('info', content);
    res.end(content);
  // }

});

module.exports = router;
