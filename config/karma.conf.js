var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            { pattern: './karma.entry.js', watched: false }
        ],

        preprocessors: {
            './karma.entry.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true,

        coverageReporter: {
            dir: helpers.root('coverage', 'client'),
            subdir: '.',
            reporters: [
                {
                    type: 'json',
                    file: 'coverage.json'
                }
            ]
        }
    };

    config.set(_config);
};