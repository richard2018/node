var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var stylish = require('jshint-stylish');
var smart = require('jshint-smart'); 
gulp.task('jshint', function() {
  return gulp.src('./index.js')
    .pipe(jshint())
    .pipe(jshint.reporter(smart));
});