const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', () => {
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('src/assets/css/'));
});

gulp.task('sass:watch', () => {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});