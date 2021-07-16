// Gulp tutorial:: https://css-tricks.com/gulp-for-beginners/
// ** Use gulp.series() || gulp.parallel() every time uses a array of tasks

// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
// const browserSync = require('browser-sync');

// function build(){
//   return
// }

// function compileSass() {
//   return gulp
//   .src('src/styles/sass/*.scss')
//   .pipe(sass())
//   .pipe(gulp.dest('src/styles/css'))
//   .pipe(browserSync.stream());
// }


// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: './src'
//     },
//   })
// })

// // Gulp Default 
// gulp.task('default', build);

// // Gulp tasks
// gulp.task('sass', compileSass);

// // Gulp watchers
// gulp.task('watch', gulp.parallel(['sass']), function() {
//   browserSync.init({
//     server: '/src'
//   })
//   gulp.watch('src/styles/sass/*.scss', gulp.parallel(['sass']))
//   gulp.watch("src/*.html").on('change', browserSync.reload);
// })


// const { series, src, dest, parallel, watch } = require('gulp');
// const sass = require('gulp-sass')(require('sass'));

// function compileSass(cb) {
//   return src('src/styles/sass/*.scss')
//   .pipe(sass())
//   .pipe(dest('src/styles/css'))
//   cb();
// }

// function build(cb) {
//   //Code
//   cb();
// }

// function css(cb) {
//   //Code
//   cb();
// }

// function js(cb) {
//   //Code
//   cb();
// }

// exports.build = build;
// exports.compileSass = compileSass;
// exports.default = series(build, parallel(css, js));

const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();

function build(){
  cb();
}

function css() {
  return src('src/styles/sass/*.scss')
  .pipe(sass())
  .pipe(dest('src/styles/css'))
  .pipe(browserSync.stream())
}


function watchCss(){
  return watch('./src/styles/sass/*.scss', css);
}

function watchHTML() {
  return watch("./src/*.html").on('change', browserSync.reload);
}

function createBrowserSync() {
  return  browserSync.init({
    server: {
        baseDir: "./src"
    }
  });
}


// Gulp Default
exports.default = build;

// Compila Sass
exports.css = css;

// Inicia Browser Sync
exports.createBrowserSync = createBrowserSync;
exports.serve = series(css, parallel(createBrowserSync, watchCss, watchHTML));

// Watch 
exports.watchCss = watchCss;