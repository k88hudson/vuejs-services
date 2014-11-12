var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var handleErrors = require('./error');

module.exports = function () {
    var src = gulp.src('./styles/common.less');
    var dest = gulp.dest('./build/styles');

    return src
        .pipe(handleErrors())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('./'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(dest);
};
