var gulp = require('gulp');
var rename = require('gulp-rename');
var component = require('./index');

gulp.task('compile:scripts', function() {
  gulp.src('test/fixtures/success-component/component.json')
    .pipe(component.scripts({ install: true }))
    .pipe(rename('components.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('compile:styles', function() {
  gulp.src('test/fixtures/success-component/component.json')
    .pipe(component.styles({ install: true }))
    .pipe(rename('components.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['compile:scripts', 'compile:styles']);

