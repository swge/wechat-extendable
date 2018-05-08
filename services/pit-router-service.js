var eventService = require('./event-service');
var messageService = require('./message-send-service');
var questionGameService = require('./question-game-service');
var winston = require('winston');

module.exports = {
    router : function(msg, app) {
        if(msg.msgtype === 'event') {
            return eventService.processEvent(msg, app);
        }
        if(msg.msgtype === 'text') {
            //TODO check global scene
            //Answer question
            if(app.currentQuestionPlayer) {
                winston.log('info', 'start answring the question');
                var text = questionGameService.answerQuestion(msg, app);
                winston.log('info', 'Question reponse: ' + text);
                return text;
            } else {
                return messageService.replyMessage(msg, '客官请稍等，游戏马上开始！');
            }
        }
    }
}