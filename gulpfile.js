var gulp = require('gulp'); 

var jshint = require('gulp-jshint');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


gulp.task('less', function() {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});


gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});


gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('less/*.less', ['less']);
    gulp.watch('css/*.css', ['minify-css']);
});


gulp.task('default', ['lint', 'less', 'minify-css', 'scripts', 'watch']);