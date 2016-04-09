"use strict";

const extract = require('gulp-html-extract');

module.exports = function(gulp){
	var task = function(){
		return gulp.src('assets/html/_*.html', { base: 'assets' })
			.pipe(extract({
				sel: "body",
				strip: true
			}))
			.pipe(gulp.dest('release'));
	}
	return task;
}
