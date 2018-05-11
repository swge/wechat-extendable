var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
var helpers = require('./helpers');

module.exports = {

    entry: {
        'polyfills': './client/polyfills.ts',
        // 'vendor': './client/vendor.ts',
        'app': './client/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /jquery[\/\\]dist[\/\\]jquery.min.js/,
                loader: 'script-loader'
            },
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                    }, 'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ['to-string-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin([
            'public',
            'views/index.hbs'
        ], {
            root: helpers.root()
        }),

        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),

        new HtmlWebpackPlugin({
            inject: true,
            template: 'views/index.tpl',
            filename: helpers.root('views', 'index.hbs')
        }),

        new CopyWebpackPlugin([
            { from: 'client/assets/img/players', to: 'assets' }
        ]),
    ]
};