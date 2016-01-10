// Default with Ionic App
var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

// Modularization Setup with JSHint as well
var jshint = require('gulp-jshint');
var browserify = require('browserify');
var vinylSource = require('vinyl-source-stream');

// Setup Paths not all used currently
var paths = {
  sass: ['./scss/**/*.scss'],
  jsSrc: ['./www/js/*.js', './www/js/**/*.js', './www/js/**/**/*.js'],
  src: ['./www/**/*', '!www/lib/**/*', '!www/dist/**/*'],
  appSrc: ['./www/js/app.js'],
  bundleSrc: ['./www/js/dist/bundle.js']
};

gulp.task('default', ['lint', 'browserify']);

// Included running Ionic Sass CLI
gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

// JSHint could use pretty reporters, KISS for now
gulp.task('lint', function() {
  gulp.src(['./www/js/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

// Browserify, vinylSource required for Browserify output to be usable by Gulp
gulp.task('browserify', function() {
  return browserify('./www/js/app.js', {debug: true})
    .bundle()
    .pipe(vinylSource('bundle.js'))
    .pipe(gulp.dest('./www/dist'));
});

// Watchers
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.jsSrc, ['browserify']);
  gulp.watch(paths.jsSrc, ['lint']);
});

// Default with Ionic App
gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

// Default with Ionic App
gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
