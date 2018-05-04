
module.exports = {
    getScene: (app, openId) => {

    },

    getGlobalScene: (app) => {
        if(app.scenes) {
            return app.scenes.global;
        }
    }
}