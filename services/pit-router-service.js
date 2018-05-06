var eventService = require('./event-service');

module.exports = {
    router : function(content) {
        if(content.msgtype === 'event') {
            eventService.processEvent(content);
        }
    }
}