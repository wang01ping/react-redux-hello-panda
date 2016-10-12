'use strict'
var gulp = require('gulp');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var gulpWebpack = require('gulp-webpack');
var bower = require('gulp-bower');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var modRewrite = require('connect-modrewrite');
var plumber = require('gulp-plumber');
var config = require('./webpack.config');
var del = require('del');

var configPro = require('./webpack.config.prod');

gulp.task('clean', function(done) {
  del.sync('app/styles/*.css');
  del.sync('build/*');
});

gulp.task('easy_less', function () {
  var stream = gulp
      .src('./app/less/*.less')
      .pipe(less())
      .pipe(gulp.dest('./assets/styles/'));
  return stream;
});

gulp.task('connect', function () {
  connect.server({
    root: './',
    port: 8890,
    livereload: true,
    middleware: function (connect, o) {
      return [
        (function () {
          var url = require('url');
          var proxy = require('proxy-middleware');
          var options = url.parse('http://api.chedone.com/web/api/v1/*');
          options.route = '/web/api/v1/*';
          return proxy(options);
        })(),
        modRewrite([
          '!\\.html|\\.js|\\.css|\\.swf|\\.jp(e?)g|\\.png|\\.gif|\\.eot|\\.woff|\\.ttf|\\.svg$ /index.html'
        ])
      ];
    }
  });
});
gulp.task('watch', function () {
  gulp
    .src('./app/less/*.less', {read: false})
    .pipe(watch('./app/less/*.less', function () {
      return gulp
        .src('./app/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./assets/styles/'))
        .pipe(connect.reload());
    }));
  gulp
    .src(['./app/**/*.js', 'app/**/*.html', './app/*.js', './app/*.jsx', './app/**/*jsx'])
    .pipe(watch(['./app/**/*.js', 'app/**/*.html', './app/*.js', './app/*.jsx', './app/**/*jsx']))
    .pipe(plumber())
    .pipe(connect.reload());
});
gulp.task('server', ['easy_less', 'connect', 'watch']);

gulp.task('bower', function() {
    return bower('./bower_components')
        .pipe(gulp.dest('./static/lib/'));
});

gulp.task('dev_webpack',function(){
    gulp.src('./app/index.js')
        .pipe(gulpWebpack(config))
        .pipe(gulp.dest('./build/'))
});
gulp.task('pro_webpack',function(){
    gulp.src('./app/index.js')
        .pipe(gulpWebpack(configPro))
        .pipe(gulp.dest('./build/'))
});
gulp.task('dev',['bower','dev_webpack', 'easy_less']);

gulp.task('build',['bower','pro_webpack', 'easy_less']);
