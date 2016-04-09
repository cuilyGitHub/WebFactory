"use strict";

var gulp = require('gulp');

gulp.task('vendor', require('./config/gulp_tasks/vendor')());
gulp.task('extract-body', require('./config/gulp_tasks/extract-body')(gulp));
gulp.task('copy', require('./config/gulp_tasks/copy')(gulp));
gulp.task('clean', require('./config/gulp_tasks/clean')());


gulp.task('default', ['vendor', 'copy', 'extract-body']);
