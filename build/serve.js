var gulp = require("gulp");
const shelljs = require('shelljs');

gulp.task('serve', () => {
  shelljs.exec('ng serve --open');
});
