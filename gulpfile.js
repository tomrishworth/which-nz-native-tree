'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var sassGlob = require('gulp-sass-glob');

var jsPaths = [
    "./bower_components/vue/dist/vue.js",
    "./bower_components/gsap/src/uncompressed/TweenMax.js",
    "src/js/app.js",
];

// Compile SCSS
gulp.task('sass', function () {
  gulp.src('src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'));
});

// Compile JS
gulp.task('scripts', function() {
    return gulp.src(jsPaths)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/js'));
});

// Start a server with LiveReload to preview the site in
gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: "build"
        }
    });
});

// Watch for file changes
gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/templates/**/*.handlebars').on('change', browserSync.reload);
});

// Build the "build" folder by running all of the above tasks
gulp.task('build', ['sass', 'scripts']);

// Run builds, run the server, and watch for file changes
gulp.task('default', ['build']);

gulp.task('serve', ['sass'], function(){
    browserSync.init({
        server: "./build"
    });
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['scripts']);
});
