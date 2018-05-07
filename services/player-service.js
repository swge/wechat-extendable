var players = require('../questions/players');

module.exports = {
    loadPlayer: (app, index) => {
        if(index > players.length -1) {
            return undefined;
        }
        let player = players[index];
        app.currentQuestionPlayer = player;
        return player;
    }
}