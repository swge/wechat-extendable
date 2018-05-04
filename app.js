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

var app = express();

//Log
logger.token('requestBody', function(req, res) {
    return req.body.xml;
});

var logDirectory = path.join(__dirname, 'log')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
var accessLogStream = rfs('access.log', {
  maxFiles: 10, // rotate daily
  maxSize: '5M',
  path: logDirectory
})

app.use(logger(':id :method :url :response-time :requestBody', {stream: accessLogStream}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/pit', xmlParser({explicitArray: false}));
app.use(envConfig.STGW_URL, express.static(path.join(__dirname, 'public')));

//add app to request
app.use('/', function(req, res, next) {
    req.app = app;
    next();
});

app.use('/', indexRouter);
app.use('/pit', pitRouter);

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
