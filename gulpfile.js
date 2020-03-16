const { series, parallel, watch } = require('gulp');
var concat = require('gulp-concat'),
    minify = require('gulp-minify'),
    minifyCss = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss');

function js() {
    return (
        src('./js/script.js')
            .pipe(concat('app.min.js'))
            .pipe(uglify())
            // .pipe(minify())
            .pipe(gulp.dest('./js'))
    );
}

function sass() {
    return (
        src('./sass/style.sass')
            .pipe(sass())
            .pipe(concat('style.min.css'))
            .pipe(uglifycss())
            // .pipe(minifyCss())
            .pipe(gulp.dest('./css'))
    );
}

function watch() {
    //自定一個watch的排程名稱
    gulp.watch('./sass/style.sass', ['sass']); //監聽路徑，以及檔案變更後所執行的任務
    gulp.watch('./js/script.js', ['js']); //監聽路徑，以及檔案變更後所執行的任務
}

gulp.task('default', ['sass', 'js', 'watch']);
