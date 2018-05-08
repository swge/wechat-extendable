var players = require('../questions/players');
var messageService = require('./message-send-service');
var userService = require('./user-service');

function isUserAnswered (userId, app) {
    return app.currentQuestionPlayer.rightAnswers[userId] || app.currentQuestionPlayer.wrongAnswers;
}

/**
 * Data structure: questionGameData: {players:{"0":{details:player}}}
 */
module.exports = {
    answerQuestion: (msg, app) => {
        var userId = msg.fromusername;
        if(isUserAnswered(userId, app)) {
            messageService.replyMessage(msg, '客官，这个问题你已经回答过了');
        } else {
            if(!app.users[userId]) {
                app.users[userId] = {userId: userId, count: 0};
                //load detail
                userService.loadUserDetail(userId, app).then((detail) => {
                    app.users[userId].detail = detail;
                })
            } 
            if(app.currentQuestionPlayer.correctQuestion === msg.content.trim()) {
                app.users[userId].count++;
                app.currentQuestionPlayer.rightAnswers[userId] = app.users[userId].detail;
                return messageService.replyMessage(msg, '恭喜你答对了！');
            } else {
                app.currentQuestionPlayer.wrongAnswers[userId] = app.users[userId].detail;
                return messageService.replyMessage(msg, '哎呀，看来你对 '+ app.currentQuestionPlayer.nickName +' 还需要加强了解啊~~');
            }
        }
    }
}