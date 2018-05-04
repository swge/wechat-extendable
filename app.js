var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var xmlParser = require('express-xml-bodyparser');

var envConfig = require('./config/env.config');

var indexRouter = require('./routes/index');
var pitRouter = require('./routes/pit');
var ttfRouter = require('./routes/ttf');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/pit', xmlParser({explicitArray: false}));
app.use(envConfig.STGW_URL, express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/pit', pitRouter);
app.use('/ttf', ttfRouter);

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
