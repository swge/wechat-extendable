var players = require('../questions/players');
const fs = require('fs');

module.exports = {
    loadPlayer: (app, index) => {
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
        return players;
    },
    addPlayer: (app, newPlayer) => {
        fs.readFile("./questions/playersInfo.json", (err, data) => {  // READ
            if (err) {
                return console.error(err);
            };      
            var data = JSON.parse(data.toString());
            data.ttfPlayer.push(newPlayer);
            data.ttfPlayer[data.ttfPlayer.length-1].id = data.ttfPlayer.length -1;
            console.log("A new player is added Success " + data.ttfPlayer.length);
            //data.ttfPlayer.forEach((ele, index) => {
                // if(ele.name === newPlayer.name){
                //     data.ttfPlayer[index] = newPlayer;
                //     data.ttfPlayer[index].id = index;
                //     console.log("A player info is updated Success");
                //     return;
                // }
            //})
            var writeData = fs.writeFile("./questions/playersInfo.json", JSON.stringify(data), (err, result) => {  // WRITE
                if (err) {
                    return console.error(err);
                } else {
                    console.log(result);
                    console.log("Success");
                }
        
            });
        });
    } 
}