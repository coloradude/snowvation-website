const gulp = require('gulp')
const plumber = require('gulp-plumber')
const browserify = require('gulp-browserify')
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer')
const pug = require('gulp-pug')
const babel = require('gulp-babel')

gulp.task('js', function(){
  return gulp.src('src/js/app.js', { read: false })
    .pipe(plumber())
    .pipe(browserify())
    .pipe(babel({
      presets: ['es2017']
    }))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('css', function(){
  return gulp.src('src/styles.styl')
    .pipe(plumber())
    .pipe(stylus({errors: true, 'include css': true}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
})

gulp.task('html', function(){
  return gulp.src('src/index.pug')
    .pipe(plumber())
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', function(){
  gulp.watch('src/js/*.js', ['js'])
  gulp.watch('src/*.pug', ['html'])
  gulp.watch('src/css/*.styl', ['css'])
})

gulp.task('default', ['js', 'watch', 'css', 'html'])