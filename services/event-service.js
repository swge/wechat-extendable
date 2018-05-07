var scanService = require('./scan-service');
var messageSendService = require('./message-send-service');

module.exports = {
    processEvent: function(event, app) {
        if(event.msgtype === 'event' && event.event === 'SCAN') {
            return scanService.processScan(event, app);
        }
    }
}