'use strict';

let gulp = require('gulp');
let gutil = require('gulp-util');

let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');

let webpackConfig = require('./webpack.config');
let webpackStatsOptions = {
  colors: gutil.colors.supportsColor,
  hash: false,
  timings: true,
  chunks: false,
  chunkModules: false,
  modules: false,
  children: true,
  version: true,
  cached: false,
  cachedAssets: false,
  reasons: false,
  source: false,
  errorDetails: false
};

gulp.task('webpack', (callback) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    gutil.log('[webpack]', stats.toString(webpackStatsOptions));
    callback();
  });
});

gulp.task('server', (callback) => {
  // Start a webpack-dev-server
  var compiler = webpack(webpackConfig);

  new WebpackDevServer(compiler, {
    stats: webpackStatsOptions
  }).listen(8080, '0.0.0.0', (err) => {
    if(err) throw new gutil.PluginError('server', err);
    // Server listening
    gutil.log('[webpack-dev-server]', 'http://0.0.0.0:8080/dist');
    // keep the server alive or continue?
    // callback();
  });
});

gulp.task('copy', (callback) => {
  return gulp.src(['src/index.html'])
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function () {
  gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  gulp.watch('src/styles/**/*.scss', ['styles']);
});

gulp.task('dev', ['build', 'watch', 'server']);

gulp.task('build', ['webpack', 'copy', 'styles']);
