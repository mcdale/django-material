var config = require('../config.js').browserSync;

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function(){
  browserSync.init(config.options);
  gulp.watch('app/static/css/**/*.css').on('change', browserSync.reload);
  gulp.watch('app/static/js/**/*.js').on('change', browserSync.reload);
  gulp.watch(['app/templates/**/*.html']).on('change', browserSync.reload);
});
