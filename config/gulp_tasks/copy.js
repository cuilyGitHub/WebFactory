"use strict";

module.exports = function(gulp){
	var task = function(){
		return gulp.src('assets/html/[^_]*.html', { base: 'assets' })
			.pipe(gulp.dest('release'));
	}
	return task;
}
