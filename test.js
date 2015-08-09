'use strict';

var assert = require('assert');
var keydupl = require('./');

it('should be in array object result', function () {
	var test = keydupl(['a']);
	assert(typeof test == 'object');
});
