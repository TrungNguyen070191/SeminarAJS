var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./app/asserts/css/*.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('./app/asserts/css'))
});

// process JS files and return the stream.
// gulp.task('js', function () {
//     return gulp.src('./**/*js')
//         .pipe(browserify())
//         .pipe(uglify())
//         .pipe(gulp.dest('./**/js'));
// });

// // create a task that ensures the `js` task is complete before
// // reloading browsers
// gulp.task('js-watch', ['js'], function (done) {
//     browserSync.reload();
//     done();
// });

gulp.task('serve', [], function () {
    browserSync({
        notify: false,
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./app/asserts/css/**/*.scss', ['sass']);
    gulp.watch('./app/**/*.html', browserSync.reload);
    gulp.watch('./app/**/*.js', browserSync.reload);
    gulp.watch('./app/asserts/css/*.css', browserSync.reload);
    // gulp.watch("./**/*.js", ['js-watch']);
    //gulp.watch(['app/images/*.css'], reload);
});

gulp.task('default', ['sass', 'serve']);