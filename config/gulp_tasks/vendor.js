"use strict";

module.exports = function(){
	var task = function(cb){
		var exec = require('child_process').exec;
		exec('make vendor', function(err){
			if (err) return cb(err);
			cb();
		});	
	}
	return task;
}
