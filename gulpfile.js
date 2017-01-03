var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('bundle',  function() {
    webpack(webpackConfig, function (err, stats) {
        if(err){
            console.log(err);
        }
    });
});

gulp.task('nodemon', function () {
    var stream = nodemon({ script: 'index.js'
        , ext: 'ts'
        , ignore: ['ignored.js']
        , tasks: ['tslint'] })

    stream
        .on('restart', function () {
            console.log('restarted!')
        })
        .on('crash', function() {
            console.error('Application has crashed!\n')
            stream.emit('restart', 10)  // restart the server in 10 seconds
        })
})