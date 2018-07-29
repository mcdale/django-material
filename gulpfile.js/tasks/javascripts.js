var config = require('../config.js').javascripts;

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('javascripts:browserify', function(){
  var entries = config.entries;
  entries.forEach(function(entry){
    var b = browserify({
      entries: entry.src,
      debug: true
    }).transform('babelify', config.transform);

    b.bundle()
      .pipe(source(entry.dest))
      .pipe(buffer())
      // .pipe($.uglify())
      .pipe(gulp.dest(config.dest));
  });
});

gulp.task('javascripts', ['javascripts:browserify']);
