var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var xmlParser = require('express-xml-bodyparser');
var rfs = require('rotating-file-stream');

var envConfig = require('./config/env.config');

var indexRouter = require('./routes/index');
var pitRouter = require('./routes/pit');
var ttfRouter = require('./routes/ttf');
var questionPlayerRouter = require('./routes/qustionPlayer');
var uploadRouter = require('./routes/uploadRouter');
var randomPlayerRouter = require('./routes/randomPlayerRouter');

var winston = require('winston');
require('winston-daily-rotate-file');
var fs = require('fs');
var path = require('path');
var moment = require('moment');
var bodyParser = require('body-parser');

const myFormat = winston.format.printf(info => {
    return `${info.timestamp}: ${info.message}`;
})
winston.add(new (winston.transports.DailyRotateFile)({
    filename: 'application-%DATE%.log',
    maxSize: '5m',
    maxFiles: '7d',
    dirname: 'log',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint(),
        myFormat
    )
}));

var app = express();

//Log
logger.token('requestBody', function(req, res) {
    return req.body.xml;
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/pit', xmlParser({explicitArray: false}));
app.use(envConfig.STGW_URL, express.static(path.join(__dirname, 'public')));

app.questionGameData = {};
app.users = {};

//add app to request
app.use('/', function(req, res, next) {
    req.app = app;
    next();
});

app.use('/', indexRouter);
app.use('/pit', pitRouter);
app.use('/ttf', ttfRouter);
app.use('/questions', questionPlayerRouter);
app.use('/upload', uploadRouter);
app.use('/random', randomPlayerRouter);

app.all('*', function(req, res) {
    res.status(200).render(path.join(__dirname, 'views/index.hbs'));
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
