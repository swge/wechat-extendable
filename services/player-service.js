// var players = require('../questions/players');
var fs = require('fs');
var path = require('path');
const numOfPlayers = process.env.numOfPlayers || 5;

module.exports = {
    loadPlayer: (app, index) => {
        var jsonPath = path.join(__dirname, '..', 'questions', 'players.json');
        var jsonString = fs.readFileSync(jsonPath, 'utf8');
        // console.log('json: ' + jsonString);
        var allPlayers = JSON.parse(jsonString);
        var players = allPlayers.slice(allPlayers.length - numOfPlayers);
        if(index > players.length -1) {
            return undefined;
        }

        

        app.questionGameData.active = true;
        let player = players[index];
        //previous player exists
        if(app.currentQuestionPlayer) {
            app.questionGameData[app.currentQuestionPlayer.name] = app.currentQuestionPlayer;
        }
        app.currentQuestionPlayer = player;
        return player;
    },
    loadRandomPlayer: (app) => {
        const jsonPath = path.join(__dirname, '..', 'questions', 'players.json');
        const jsonString = fs.readFileSync(jsonPath, 'utf8');
        const allPlayers = JSON.parse(jsonString);
        const index = Math.floor(Math.random() * Math.floor(allPlayers.length - numOfPlayers));
        app.questionGameData.active = true;
        let player = allPlayers[index];
        if(app.currentQuestionPlayer) {
            app.questionGameData[app.currentQuestionPlayer.name] = app.currentQuestionPlayer;
        }
        player.rightAnswers = {};
        player.wrongAnswers = {};
        app.currentQuestionPlayer = player;
        return player;
    },
    getAllPlayer:(app) => {
        var jsonPath = path.join(__dirname, '..', 'questions', 'players.json');
        var jsonString = fs.readFileSync(jsonPath, 'utf8');
        var allPlayers = JSON.parse(jsonString);
        var players = allPlayers.slice(allPlayers.length - numOfPlayers);

        return players;
    } 
}