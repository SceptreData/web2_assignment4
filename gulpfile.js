let gulp = require("gulp");
let sass = require("gulp-sass");
let browserSync = require("browser-sync").create();

gulp.task("sass", function() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass())
    .on("error", err => {
      browserSync.notify(err.message, 4000);
      this.emit("end");
    })
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task(
  "serve",
  gulp.series("sass", () => {
    browserSync.init({
      server: "./src"
    });

    gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
    gulp.watch("src/*.html").on("change", browserSync.reload);
  })
);

gulp.task("default", gulp.series("serve"));
