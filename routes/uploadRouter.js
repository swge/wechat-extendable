var express = require('express');
var multer = require('multer');
var router = express.Router();
var fs = require('fs');
var editJsonFile = require("edit-json-file");
var mime = require('mime-types');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('upload', {
        title: 'Upload'
    });
});

const multerConfig = {

    storage: multer.diskStorage({

        destination: function (req, file, next) {
            next(null, './public/dist/assets');
        },

        filename: function (req, file, next) {
            const ext = mime.extension(file.mimetype);
            next(null, file.fieldname + '.' + ext);
        }
    }),

    fileFilter: function (req, file, next) {
        if (!file) {
            next();
        }

        const image = file.mimetype.startsWith('image/');
        if (image) {
            console.log('photo uploaded');
            next(null, true);
        } else {
            console.log("file not supported")
            return next();
        }
    }
};

router.post('/', multer(multerConfig).single('avator'), function (req, res) {
    const ext = mime.extension(req.file.mimetype);
    const newFileName = req.body.firstName + '-' + req.body.lastName + '.' + ext;
    fs.renameSync('public/dist/assets/avator.' + ext, 'public/dist/assets/' + newFileName);
    fs.createReadStream('public/dist/assets/' + newFileName)
    .pipe(fs.createWriteStream('client/assets/img/players/' + newFileName));
    let data = fs.readFileSync('questions/players.json', 'utf8');
    let dataObj = JSON.parse(data);
    
    const id = req.body.firstName + req.body.lastName + req.body.nickName;
    let playerExisted = false;
    for (const i of dataObj) {
        if (i.name === req.body.firstName + ' ' + req.body.lastName && i.nickName === req.body.nickName) {
            updatePlayer(req, ext, i);
            playerExisted = true;
            break;
        }
    }
    if (!playerExisted) {
        let player = Object.create(null);
        player.name = req.body.firstName + ' ' + req.body.lastName;
        player.nickName = req.body.nickName;
        player.rightAnswers = Object.create(null);
        player.wrongAnswers = Object.create(null);
        updatePlayer(req, ext, player);
        dataObj.push(player);
    }

    fs.writeFileSync('questions/players.json', JSON.stringify(dataObj), 'utf8');
    res.send('Complete! <a href="/upload">try again</a>');
});

function updatePlayer(req, ext, player) {
    player.image = '/stgw/digital/wechat/dist/assets/' + req.body.firstName + '-' + req.body.lastName + '.' + ext;
    let questions = [];
    player.questions = questions;
    player.correctQuestion = req.body.answer === '1' ? 'a' : req.body.answer === '2' ? 'b' : 'c';
    let q1 = Object.create(null);
    q1.label = 'a';
    q1.content = req.body.q1;
    q1.correct = req.body.answer === '1' ? false : true;
    questions.push(q1);

    let q2 = Object.create(null);
    q2.label = 'b';
    q2.content = req.body.q2;
    q2.correct = req.body.answer === '2' ? false : true;
    questions.push(q2);

    let q3 = Object.create(null);
    q3.label = 'c';
    q3.content = req.body.q3;
    q3.correct = req.body.answer === '3' ? false : true;
    questions.push(q3);

}


module.exports = router;