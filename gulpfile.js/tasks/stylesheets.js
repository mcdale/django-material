var config = require('../config.js').stylesheets;

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('stylesheets:compile', function(){
  return gulp.src(config.src)
    .pipe($.sass(config.options))
      .on('error', $.notify.onError({ title: 'SASS compilation error', message: '<%= error.message %>', time: 10000,}))
    .pipe($.autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.dest));
});

gulp.task('stylesheets', ['stylesheets:compile'], function(){
  gulp.watch(config.src, ['stylesheets:compile']);
});
