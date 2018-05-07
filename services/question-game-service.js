

module.exports = {
    answerQuestion: (msg, app) => {
        var data;
        if(!app.questionGameData){
            app.questionGameData = {};
        }
        data = app.questionGameData;
    }
}