var config = require('../config.js');
var gulp = require('gulp');


gulp.task('watch:javascripts', function(){
  gulp.watch(config.javascripts.src, ['javascripts:browserify']);
});

gulp.task('watch:stylesheets', function(){
  gulp.watch(config.stylesheets.src, ['stylesheets']);
});

gulp.task('watch', ['watch:javascripts','watch:stylesheets']);

gulp.task('build', ['javascripts','stylesheets']);

gulp.task('default', ['build','serve','watch']);
