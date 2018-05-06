var scanService = require('./scan-service');

module.exports = {
    processEvent: function(event, app) {
        if(event.event === 'SCAN') {
            scanService.processScan(event, app);
        }
    }
}