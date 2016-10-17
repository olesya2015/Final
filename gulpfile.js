var gulp = require("gulp"),
    less = require("gulp-less"),
    nano = require("gulp-cssnano"),
    browserSync = require("browser-sync").create(),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    addSrc = require("gulp-add-src");


gulp.task("html", function () {
    return gulp.src([
        "src/index.html",
        "src/index1.html"
    ])
        .pipe(gulp.dest("dist"));
});

gulp.task("foto", function () {
    return gulp.src("src/foto/**/*.{jpg,png}")
        .pipe(gulp.dest("dist/foto"));
});
gulp.task("fonts", function () {
    return gulp.src([
        "src/vendor/bootstrap/dist/fonts/*.*",
        "src/fonts/**/*.*"
    ])
        .pipe(gulp.dest("dist/fonts"));
});
gulp.task("vendor-css", function () {
    return gulp.src([
        "src/vendor/bootstrap/dist/css/bootstrap.css"
    ])
        .pipe(nano())
        .pipe(concat("vendor.min.css"))
        .pipe(gulp.dest("dist/css"));
});
gulp.task("app-css", function () {
    return gulp.src("src/style/style.less")
        .pipe(less())
        .pipe(nano())
        .pipe(gulp.dest("dist/style"));
});
gulp.task("vendor-js", function () {
    return gulp.src([
        "src/vendor/bootstrap/dist/js/bootstrap.min.js"
    ])
        .pipe(addSrc.prepend("src/vendor/jquery/dist/jquery.js"))
        .pipe(concat("vendor.min.js"))
        .pipe(gulp.dest("dist/js"));
});

gulp.task("app-js", function () {
    return gulp.src("src/main.js")
        .pipe(concat("app.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
});
gulp.task("data-js", function () {
    return gulp.src("src/vendor/datatables.net/js/jquery.dataTables.min.js")
        .pipe(concat("data.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
});
gulp.task("json", function () {
    return gulp.src("src/**/*.json")
        .pipe(gulp.dest("dist/"));
});
gulp.task("data-css", function () {
    return gulp.src([
        "src/style/data.css"
    ])
        .pipe(nano())
        .pipe(concat("data.css"))
        .pipe(gulp.dest("dist/style"));
});
gulp.task("tost-css", function () {
    return gulp.src([
        "src/vendor/toastr/toastr.min.css"
    ])
        .pipe(nano())
        .pipe(concat("tost.min.css"))
        .pipe(gulp.dest("dist/css"));
});
gulp.task("tost-js", function () {
    return gulp.src("src/vendor/toastr/toastr.min.js")
        .pipe(concat("tost.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
});

gulp.task("default", ["html", "fonts", "foto", "vendor-css", "app-css", "data-css", "vendor-js", "app-js", "json", "data-js", "tost-css", "tost-js", "watch"]);

gulp.task("watch", function () {
    browserSync.init({
        server: "dist"
    });
    gulp.watch("src/style/**/*.less", ["app-css"]);
    gulp.watch("src/foto/**/*.{jpg,png}", ["foto"]);
    gulp.watch("src/vendor/datatables.net/**/*.js", ["data-js"]);
    gulp.watch("src/**/*.js", ["app-js"]);
    gulp.watch([
        "src/vendor/bootstrap/dist/fonts/*.*",
        "src/fonts/**/*.*"
    ], ["fonts"]);
    gulp.watch([
        "src/vendor/toastr/toastr.min.css"
    ], ["data-css"]);
    gulp.watch([
        "src/vendor/datatables.net/data.css"
    ], ["tost-css"]);
    gulp.watch([
        "src/vendor/bootstrap/dist/css/bootstrap.css"
    ], ["vendor-css"]);
    gulp.watch([
        "src/vendor/jquery/dist/jquery.min.js",
        "src/vendor/bootstrap/dist/js/bootstrap.min.js"
    ], ["vendor-js"]);
    gulp.watch([
        "src/vendor/toastr/toastr.min.js"
    ], ["tost-js"]);
    gulp.watch("src/**/*.html", ["html"]);
    gulp.watch("dist/**/*.html")
        .on("change", browserSync.reload);

});