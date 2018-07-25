var express = require('express');
var router = express.Router();
var playerSerivce = require('../services/player-service');

/* GET home page. */
router.get('/', function(req, res, next) {
  var detail = playerSerivce.loadRandomPlayer(req.app);
  res.json(detail);
});

module.exports = router;
