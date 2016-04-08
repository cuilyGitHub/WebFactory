"use strict";

const filter = require('gulp-filter')
const extract = require('gulp-html-extract')

module.exports = function(gulp){
	var task = function(){
		const f = filter(['**/*.html', '!assets/html/index.html'])
		return gulp.src('assets/html/*.html', { base: 'assets' })
			.pipe(f)
			.pipe(extract({
				sel: "body",
				strip: true
			}))
			.pipe(gulp.dest('release/html'));
	}
	return task;
}
