const gulp = require('gulp'),
      sass = require('gulp-sass');

gulp.task('styles', function() {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'))
});

//Watch task
gulp.task('default', gulp.parallel('styles',function() {
    gulp.watch('sass/**/*.scss',gulp.parallel('styles'));
}));