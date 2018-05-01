var express = require('express');
var router = express.Router();
var envConfig = require('../config/env.config');

function checkSignature(params){
  var key=[envConfig.TOKEN,params.timestamp,params.nonce].sort().join(''); 
  var sha1=require('crypto').createHash('sha1');
  sha1.update(key);
  return sha1.digest('hex') ==params.signature;
}

/* Weixin validation */
router.get('/', function(req, res, next) {
  if(!checkSignature(req.params)){
    res.end('signature fail');
  } else {
    res.end(req.params.echostr);
  }
});

router.post('/', function(req, res) {
  if(!checkSignature(req.params)){
    res.end('signature fail');
  } else {
    res.end(req.body.xml);
  }

});

module.exports = router;
