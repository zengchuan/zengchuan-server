'use strict';

var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    cache: true,
    entry: {
        // main: './build/dev'
        main: './src'
        // ,
        // vendor: [
        //   'babel-polyfill',
        //   'fbemitter',
        //   'flux',
        //   'react',
        //   'react-dom'
        // ]
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
            test: /\.ts(x?)$/,
            // exclude: /node_modules/,
            loader: 'ts-loader'
        }
        //     ,
        //     {
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     loader: 'babel-loader'
        // }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/\.(css|less)$/),
        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(process.env.NODE_ENV)
        }),
    ],
    target: 'node',
    externals: nodeModules,
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
};
