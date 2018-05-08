var request = require('request');
var config = require('../config/env.config');
var winston = require('winston');

function requestAccessToken() {
    var url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' +
        config.APP_ID + '&secret=' + config.APP_SECRET;
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

module.exports = {
    getAccessToken: (app) => {
        if(!app.accessToken || app.accessToken.expires_at < new Date().getTime()) {
            requestAccessToken().then(function(token){
                var expires_at = new Date().getTime() + token.expires_in * 1000 - 600000;
                token.expires_at = expires_at;
                app.accessToken = token;
            }).error(function(err){
                console.log(err);
            })
        }
        return app.accessToken.access_token;
    }
}