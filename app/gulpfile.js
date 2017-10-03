var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./asserts/css/*.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('./asserts/css'))
});

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('./**/*js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('./**/js'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('serve', [], function () {
    browserSync({
        notify: false,
        server: {
            baseDir: './components/'
        }
    });
    gulp.watch('./asserts/css/**/*.scss', ['sass']);
    //gulp.watch('./**/*.html', browserSync.reload);
    gulp.watch('../modules/*.js', browserSync.reload);
    gulp.watch('../asserts/css/*.css', browserSync.reload);
    gulp.watch("./**/*.js", ['js-watch']);
    //gulp.watch(['app/images/*.css'], reload);
});

gulp.task('default', ['sass', 'serve']);