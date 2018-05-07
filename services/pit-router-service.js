var eventService = require('./event-service');
var messageService = require('./message-send-service');

module.exports = {
    router : function(msg, app) {
        if(msg.msgtype === 'event') {
            return eventService.processEvent(msg, app);
        }
        if(msg.msgtype === 'text') {
            //TODO check global scene
            //Answer question
            if(app.currentQuestionPlayer) {
                var text = messageService.replayMessage(msg, '恭喜你答对了！');
                return text;
            } else {
                return messageService.replayMessage(msg, '客官请稍等，游戏马上开始！');
            }
        }
    }
}