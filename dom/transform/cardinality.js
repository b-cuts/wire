(function (define) {
define(function (require) {
	"use strict";

	var mapTokenList, replaceClasses, functional, defaultClasses, defaultOtherwise;

	mapTokenList = require('./mapTokenList');
	replaceClasses = require('./replaceClasses');
	functional = require('../../lib/functional');

	defaultClasses = {
		0: 'zero',
		1: 'one'
	};

	defaultOtherwise = 'many';

	return function(node, options) {

		var classMap, otherwise, prefix, key;

		classMap = {};
		prefix = '';

		if(!options) options = {};

		if(typeof options == 'string') {
			prefix = options + '-';
		} else if(options.prefix) {
			prefix = options.prefix + '-';
		}

		otherwise = prefix + defaultOtherwise;

		for(key in defaultClasses) {
			classMap[key] = prefix + defaultClasses[key];
		}

		return functional.compose(mapTokenList(classMap, options), replaceClasses(node, options))

	}

});
}(
	typeof define == 'function' && define.amd
		? define
		: function (factory) { module.exports = factory(require); }
));