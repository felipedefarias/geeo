'use strict';

var gulp = require('gulp');

var dist = './dist';

gulp.task('sass', function () {
	var sass = require('gulp-sass');

	return gulp.src(['./assets/styles/**/*.sass'])
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(gulp.dest(dist));
});

gulp.task('js', function () {
	
	return gulp.src(['./assets/scripts/**/*.js'])
	.pipe(gulp.dest(dist));
});

gulp.task('images', function () {
	
	return gulp.src(['./assets/images/**/*'])
	.pipe(gulp.dest(dist + '/images'));
});

gulp.task('sounds', function () {
	
	return gulp.src(['./assets/sounds/**/*'])
	.pipe(gulp.dest(dist + '/sounds'));
});

gulp.task('html', function () {
	
	return gulp.src(['./*.html'])
	.pipe(gulp.dest(dist));
});
 
gulp.task('webserver', function() {
	var webserver = require('gulp-webserver');
	
	return gulp.src('./')
	.pipe(webserver({
		livereload: false,
		directoryListing: true,
		open: true,
	}));
});
 
gulp.task('deploy', function() {
	var ghPages = require('gulp-gh-pages');
	
	return gulp.src('./dist/**/*')
	.pipe(ghPages());
});
 
gulp.task('default', ['sass', 'js', 'images', 'html', 'sounds', 'webserver'], function () {
  gulp.watch(['./assets/styles/**/*.sass'], ['sass']);
  gulp.watch(['./assets/scripts/**/*.js'], ['js']);
  gulp.watch(['./assets/images/**/*'], ['images']);
  gulp.watch(['./*.html'], ['html']);
});