var tokenService = require('./token-service');
var request = require('request');
var winston = require('winston');

module.exports = {
    loadUserDetail: (userId, app) => {
        var url = 'https://api.weixin.qq.com/cgi-bin/user/info?lang=zh_CN&access_token=' + tokenService.getAccessToken(app) + '&openid=' + userId;
        return new Promise(function(resolve, reject) {
            request.get(url, function(error, response, body) {
                if(error) {
                    winston.log('error', error);
                    reject(error);
                } else {
                    resolve(body);
                }
            })
        })
    }
}