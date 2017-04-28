'use strict';

var gulp = require('gulp');
var bump = require('gulp-bump');


module.exports = function() {
	return function() {
		return gulp.src('package.json')
			.pipe(bump({ type: 'major' }))
			.pipe(gulp.dest('./'));
	};
};