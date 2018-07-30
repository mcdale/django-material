var config = require('../config.js').templates;

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('templates', function(){
  gulp.watch(config.src,['reload']);
});
