var config = require('../config.js');
var gulp = require('gulp');

gulp.task('build', ['javascripts','stylesheets','templates']);

gulp.task('default', ['build','serve']);

gulp.task('branding', ['icons','images']);
