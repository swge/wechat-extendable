var scanService = require('./scan-service');
var messageSendService = require('./message-send-service');

module.exports = {
    processEvent: function(event, app) {
        if(msgtype === 'event' && event.event === 'SCAN') {
            scanService.processScan(event, app);
        }
        if(msgtype === 'text') {
            return messageSendService.replayMessage()
        }
    }
}