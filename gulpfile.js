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

gulp.task('copyProjectAssets', () => {
  return gulp.src('src/projects/*/*.{png,jpg,jpeg,gif}')
    .pipe(gulp.dest('_site/assets'));
});

gulp.task('copyProjectAssets:watch', () => {
  gulp.watch('src/projects/*/*.{png,jpg,jpeg,gif}', gulp.series('copyProjectAssets'));
});

gulp.task('copyWorkAssets', () => {
  return gulp.src('src/work/img/*.{png,jpg,jpeg,gif}')
    .pipe(gulp.dest('_site/assets/work'));
});

gulp.task('copyWorkAssets:watch', () => {
  gulp.watch('src/work/img/*.{png,jpg,jpeg,gif}', gulp.series('copyWorkAssets'));
});

gulp.task('copyFaviconAssets', () => {
  return gulp.src('src/favicon/*.*')
    .pipe(gulp.dest('_site'));
});