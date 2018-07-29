var config = require('../config.js').stylesheets;

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('stylesheets', function(){
  return gulp.src(config.src)
    .pipe($.sass(config.options))
    .pipe(gulp.dest(config.dest));
});
