var express = require('express');
var router = express.Router();
var envConfig = require('../config/env.config');

/* Weixin validation */
router.get('/round-winners', function (req, res, next) {
    if(req.app.currentQuestionPlayer) {
        res.json(Object.values(req.app.currentQuestionPlayer.rightAnswers));
    }
});

router.get('/final-score', function (req, res, next) {
    res.json(Object.values(req.app.users).sort((a,b) => {
        return b.score - a.score;
    }));
});

module.exports = router;
