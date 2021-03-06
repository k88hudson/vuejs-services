var gulp = require('gulp');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var handleErrors = require('./error');

module.exports = function () {
    var dest = gulp.dest('./build/js');
    var browserified = browserify('./lib/index.js', {
        insertGlobals: true,
        debug: true,
        transform: ['partialify', 'bulkify']
    });
    return browserified
        .bundle()
        .pipe(handleErrors())
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(dest);
};
