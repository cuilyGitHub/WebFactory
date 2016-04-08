"use strict";

const del = require('del');

module.exports = function(){
	var task = function(){
		del([
			'release/html/**/*'
		]);
	}
	return task;
}
