var express = require('express');
var router = express.Router();
var envConfig = require('../config/env.config');
const path = require('path');
var fs = require('fs');

/* Weixin validation */
router.get('/round-winners', function (req, res, next) {
    req.app.questionGameData.active = false;
    if(req.app.currentQuestionPlayer) {
        const jsonPath = path.join(__dirname, '..', 'questions', 'players.json');
        const jsonString = fs.readFileSync(jsonPath, 'utf8');
        const allPlayers = JSON.parse(jsonString);
        const currentQuestionPlayer = req.app.currentQuestionPlayer;
        for (const iter of allPlayers) {
            if (iter.name === currentQuestionPlayer.name && iter.nickName === currentQuestionPlayer.nickName) {
                iter.rightAnswers = {...iter.rightAnswers, ...currentQuestionPlayer.rightAnswers};
                iter.wrongAnswers = {...iter.wrongAnswers, ...currentQuestionPlayer.wrongAnswers};
                break;                
            }
        }
        fs.writeFileSync(jsonPath, JSON.stringify(allPlayers), 'utf8');
        res.json(Object.values(req.app.currentQuestionPlayer.rightAnswers));
    }
});

router.get('/final-score', function (req, res, next) {
    req.app.questionGameData.active = false;
    res.json(Object.values(req.app.users).sort((a,b) => {
        return b.score - a.score;
    }));
});

module.exports = router;
