const gulp = require('gulp');
const { exec } = require('shelljs');

const ngCli = "node --max_old_space_size=4096 node_modules/@angular/cli/bin/ng";

gulp.task('build', (done) => {
  exec(`${ngCli} build`);
  done();
});
