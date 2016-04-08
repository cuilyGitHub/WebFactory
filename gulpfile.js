"use strict";

var gulp = require('gulp');

gulp.task('extract-body', require('./config/gulp_tasks/extract-body')(gulp));
gulp.task('clean', require('./config/gulp_tasks/clean')());


gulp.task('default', ['extract-body']);
