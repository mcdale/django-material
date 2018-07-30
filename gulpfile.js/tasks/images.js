var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var argv = require('yargs').argv;
var config = require('../config.js').images;

gulp.task('images:copy', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});

gulp.task('images:branding', function () {
    return gulp.src(config.src)
        .pipe($.imagesResizer(config.branding)
            .on('error', $.notify.onError({
                title: 'Image resizer error',
                message: '<%= error.message %>',
                time: 10000,
            }))
        )
        .pipe(gulp.dest(config.dest));
});

gulp.task('images', ['icons:branding','images:copy']);
