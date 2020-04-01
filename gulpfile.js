const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const concat = require('concat');
const uglify = require('gulp-uglify');

gulp.task('js', function() {
	return gulp.src(['app/*.js'])
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
})
gulp.task('css', function(){
	return gulp.src('/style.css')
		.pipe(cssnano())
		.pipe(gulp.dest('dist/css'));
})

gulp.task('watch', function(){
	gulp.watch('style.css', ['css']);
	gulp.watch('app/*.js', ['js']);
});