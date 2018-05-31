var players = require('../questions/players');
var messageService = require('./message-send-service');
var userService = require('./user-service');

function isUserAnswered (userId, app) {
    return app.currentQuestionPlayer.rightAnswers[userId] || app.currentQuestionPlayer.wrongAnswers[userId];
}

/**
 * Data structure: questionGameData: {players:{"0":{details:player}}}
 */
module.exports = {
    answerQuestion: (msg, app) => {
        var userId = msg.fromusername;
        if(isUserAnswered(userId, app)) {
            return messageService.replyMessage(msg, '客官，这个问题你已经回答过了');
        } 
        else if(!app.questionGameData.active){
            return messageService.replyMessage(msg, '客官，此回合已结束，你跟Jerry学坏了!');
        }
        else {
            if(!app.users[userId]) {
                app.users[userId] = {userId: userId, score: 0};
                //load detail
                userService.loadUserDetail(userId, app).then((detail) => {
                    app.users[userId].detail = detail;
                })
            } 
            if(app.currentQuestionPlayer.correctQuestion.toUpperCase() === msg.content.trim().toUpperCase()) {
                app.users[userId].score++;
                app.currentQuestionPlayer.rightAnswers[userId] = app.users[userId];
            } else {
                app.currentQuestionPlayer.wrongAnswers[userId] = app.users[userId];
                // return messageService.replyMessage(msg, '哎呀，看来你对 '+ app.currentQuestionPlayer.nickName +' 还需要加强了解啊~~');
            }
            return messageService.replyMessage(msg, '收到！敬请期待揭晓答案！');
        }
    }
}