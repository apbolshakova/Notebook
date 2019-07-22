const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('compileCSS', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'))
});

gulp.task('watchStyleEditing', gulp.parallel('compileCSS', function () {
  gulp.watch('sass/**/*.scss', gulp.parallel('compileCSS'));
}));