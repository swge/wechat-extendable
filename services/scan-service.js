
module.exports = {
    processScan: function(scan, app) {
        //GlobalQeustionScene
        if(scan.eventkey === 'GlobalQuestionScene') {
            if(!app.scenes) {
                app.scenes = {};
            }
            app.scenes.globalScene = GlobalQuestionScene;
            //reset
            app.questions = {};
        }
        //Join Question Game
        if(scan.eventkey === 'JoinQuestionGame') {

        }
    }
}