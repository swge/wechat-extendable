var eventService = require('./event-service');
var messageService = require('./message-send-service');

module.exports = {
    router : function(content, app) {
        if(msg.msgtype === 'event') {
            return eventService.processEvent(msg, app);
        }
        if(msg.msgtype === 'text') {
            //TODO check global scene
            //Answer question
            if(app.currentQuestionPlayer) {
                return messageService.replayMessage(msg, '恭喜你答对了！');
            }
        }
    }
}