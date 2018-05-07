var scanService = require('./scan-service');

module.exports = {
    processMessage: function(event, app) {
        if(msgtype === 'event' && event.event === 'SCAN') {
            scanService.processScan(event, app);
        }
    }
}