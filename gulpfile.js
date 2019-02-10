var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify'),
    minifyCss = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss');

gulp.task('js', function () {
    return gulp.src('./js/script.js')
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        // .pipe(minify())
        .pipe(gulp.dest('./js'))
});

gulp.task('scss', function () {
    return gulp.src('./scss/style.scss')
        .pipe(sass())
        .pipe(concat('style.min.css'))
        .pipe(uglifycss())
        // .pipe(minifyCss())
        .pipe(gulp.dest('./css'))
});

// gulp.task("default", ["js", "scss"], function() {
//   return gulp.src("src/index.html").pipe(gulp.dest("dist"));
// });

gulp.task("watch", function() {
  //自定一個watch的排程名稱
    gulp.watch("./scss/style.scss", ["scss"]); //監聽路徑，以及檔案變更後所執行的任務
    gulp.watch("./js/script.js", ["js"]); //監聽路徑，以及檔案變更後所執行的任務
});

gulp.task("default", ["scss", "js", "watch"]);
