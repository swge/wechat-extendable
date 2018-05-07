var tokenService = require('./token-service');
var template = require('./template/message-template');
var format = require('string-template');

module.exports = {
    replayMessage: (originalMessage, content) => {
        var from = originalMessage.fromusername;
        var to = originalMessage.tousername;
        var time = new Date().getTime();

        return format(template.replyTextTempalte, {toUser: from, fromUser: to, time: time, content: content});
    }
}