// var players = require('../questions/players');
var fs = require('fs');
var path = require('path');

module.exports = {
    loadPlayer: (app, index) => {
        var jsonPath = path.join(__dirname, '..', 'questions', 'players.json');
        var jsonString = fs.readFileSync(jsonPath, 'utf8');
        // console.log('json: ' + jsonString);
        var allPlayers = JSON.parse(jsonString);
        var players = allPlayers.slice(allPlayers.length - 6);
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
    getAllPlayer:(app) => {
        var jsonPath = path.join(__dirname, '..', 'questions', 'players.json');
        var jsonString = fs.readFileSync(jsonPath, 'utf8');
        var allPlayers = JSON.parse(jsonString);
        var players = allPlayers.slice(allPlayers.length - 6);

        return players;
    } 
}