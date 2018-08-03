var config = require('../config.js').templates;

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('templates:copy', function(){
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});

gulp.task('templates:watch', ['templates:copy'], function(){
  gulp.watch(config.src,['templates:copy']);
});

gulp.task('templates', ['templates:watch'], function(){
  gulp.watch('app/templates/**/*.html',['reload']);
});
