var config = require('../config.js').browserSync;

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('reload', function(){
  browserSync.reload();
});

gulp.task('serve', function(){
  browserSync.init(config.options);
  gulp.watch('app/static/css/**/*.css',['reload']);
  gulp.watch('app/static/js/**/*.js',['reload']);

});
