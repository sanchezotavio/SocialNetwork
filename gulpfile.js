'use strict';

var gulp = require('gulp');

var sass = require('gulp-sass');

var cleanCSS = require('gulp-clean-css');

var imagemin = require('gulp-imagemin');

gulp.task('sass', function() {
    return gulp.src('styles/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('styles/css'))
});


gulp.task('minify-css', function() {
    return gulp.src('styles/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('styles/css'));
});

gulp.task('imagemin', function() {
    return gulp.src('styles/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('styles/images'))
});

gulp.task('default', ['sass', 'minify-css', 'imagemin'], function() {

    gulp.watch('styles/css/*.css', function() {
        gulp.run('minify-css');
    });

    gulp.watch('styles/images/*', function() {
        gulp.run('imagemin');
    });

    gulp.watch('styles/scss/*.scss', function() {
        gulp.run('sass');
    });

});