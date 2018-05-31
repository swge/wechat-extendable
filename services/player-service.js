var players = require('../questions/players');

module.exports = {
    loadPlayer: (app, index) => {
        if(index > players.length -1) {
            return undefined;
        }
        let player = players[index];
        //previous player exists
        if(app.currentQuestionPlayer) {
            app.questionGameData.active = true;
            app.questionGameData[app.currentQuestionPlayer.name] = app.currentQuestionPlayer;
        }
        app.currentQuestionPlayer = player;
        return player;
    },
    getAllPlayer:(app) => {
        return players;
    } 
}