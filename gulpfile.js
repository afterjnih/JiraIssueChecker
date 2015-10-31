'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.task('default', ['babel', 'watch'], function(){
});

gulp.task('babel', function(){
  browserify('./js/src/background.js', { debug: true })
  .transform(babelify)
  .bundle()
  .on("error", function (err) { console.log("Error : " + err.message); })
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./js/dest/'))
});

// gulp.task('babel', function(){
//   return gulp.src('./js/src#<{(|.js')
//                              .pipe(plumber({
//                              errorHandler: notify.onError('Error: <%= error.message %>')
//                              }))
//                              .pipe(sourcemaps.init())
//                              .pipe(babel({
//                              stage: 0
//                              }))
//                              .pipe(sourcemaps.write('.'))
//                              .pipe(gulp.dest('./js/dest/'));
//                              });

gulp.task('watch', function() {
  gulp.watch('./js/src/*.js', ['babel'])
});
