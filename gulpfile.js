const gulp = require('gulp');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');

gulp.task('nodemon', function (cb) {
  var started= false;
  nodemon({
    script: 'server/app.js',
    ext: 'js',
    env: {
      'NODE_ENV': 'development'
    },
    watch: ['./server']
  }).on('start', function (){
    if (!started) {
      cb();
      started = true;
    }
  }).on('restart', function () {
    setTimeout(function () {
      console.log('server restarted')
      browserSync.reload();
    });
  });
});

gulp.task('browser-sync', ['nodemon'], function (){
  browserSync.init({
    files: ['./client/**/*.*'],
    proxy: 'localhost:3000',
    port: 4000
  });

  gulp.watch('./client/**/*.*', browserSync.reload)
});

gulp.task('default', ['browser-sync']);
