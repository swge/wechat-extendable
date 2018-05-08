var messageService = require('./message-send-service');

module.exports = {
    processScan: function(scan, app) {
        //GlobalQeustionScene
        if(scan.eventkey === 'GlobalQuestionScene') {
            if(!app.scenes) {
                app.scenes = {};
            }
            app.scenes.globalScene = GlobalQuestionScene;
            //reset
        }
        //Join Question Game
        if(scan.eventkey === 'JoinQuestionGame') {
            return messageService.replyMessage(scan, '欢迎参加有奖猜猜猜活动！');
        }
    }
}