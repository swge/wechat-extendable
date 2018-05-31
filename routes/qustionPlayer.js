var express = require('express');
var router = express.Router();
var playerSerivce = require('../services/player-service');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:index', (req, res) => {
  var index = Number.parseInt(req.params.index);
  var detail = playerSerivce.loadPlayer(req.app, index);
  res.json(detail);
})

router.get('/get/all-players', (req, res) => {
  var allPlayers = playerSerivce.getAllPlayer();
  res.json(allPlayers);
})
module.exports = router;
