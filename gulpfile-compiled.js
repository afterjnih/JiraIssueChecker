'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.task('default', ['start'], function () {});

gulp.task('start', function () {
                           return gulp.src('./js/src/*.es6').pipe(plumber({
                                                      errorHandler: notify.onError('Error: <%= error.message %>')
                           })).pipe(sourcemaps.init()).pipe(babel({
                                                      stage: 0
                           })).pipe(sourcemaps.write('.')).pipe(gulp.dest('./js/dest/'));
});

//# sourceMappingURL=gulpfile-compiled.js.map