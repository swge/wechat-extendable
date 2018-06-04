var express = require('express');
var router = express.Router();
var playerSerivce = require('../services/player-service');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/:index', (req, res, next) => {
//   var index = Number.parseInt(req.params.index);
//   var detail = playerSerivce.loadPlayer(req.app, index);
//   res.json(detail);
// })

router.get('/get/all-players', (req, res, next) => {
  var allPlayers = playerSerivce.getAllPlayer();
  res.json(allPlayers);
})

router.post('/add', (req, res, next) => {
    var data = {
        "name": "test11",
        "nickName": "Ammy",
        "image": "/stgw/digital/wechat/dist/assets/ammy.jpg",
        "questions": [
            {"label": "a", "content": "桌式足球比赛", "correct": false},
            {"label": "b", "content": "撞电线杆", "correct": true},
            {"label": "c", "content": "曾经养过一只小泰迪", "correct": true}
        ],
        "correctQuestion": "a"
    };
    playerSerivce.addPlayer(req.app, data);
});

/* Weixin validation */
router.get('/round-winners', (req, res, next) => {
    req.app.questionGameData.active = false;
    if(req.app.currentQuestionPlayer) {
        res.json(Object.values(req.app.currentQuestionPlayer.rightAnswers));
    }
});

router.get('/add', (req, res, next)=> {
    req.app.questionGameData.active = false;
    res.json(Object.values(req.app.users).sort((a,b) => {
        return b.score - a.score;
    }));
});
module.exports = router;
