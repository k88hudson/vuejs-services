var gulp = require('gulp');
var webserver = require('gulp-webserver');
var del = require('del');

var less = require('./gulp/less');
var browserify = require('./gulp/browserify');

gulp.task('clean', function (cb) {
    del(['build/**/*'], cb);
});

gulp.task('copy-static', ['clean'], function() {
    return gulp.src('./static/**/*')
        .pipe(gulp.dest('./build'));
});
// gulp.task('copy-less', ['clean', 'copy-static'], function () {
//     return gulp.src('./styles/**/*')
//         .pipe(gulp.dest('./build/less'));
// });

gulp.task('less', ['clean'], less);
gulp.task('browserify', ['clean'], browserify);

gulp.task('build', ['copy-static', 'less', 'browserify']);

gulp.task('watch', ['build'], function () {
    gulp.watch([
        './{static,styles,lib,views}/**/*.{js,json,less,html}'
    ],['build']);
});

gulp.task('dev', ['watch'], function() {
    gulp.src('build')
        .pipe(webserver({
            port: 1987,
            livereload: true,
            fallback: 'index.html'
        }));
});
