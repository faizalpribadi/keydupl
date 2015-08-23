var keydupl = require('../');
var test = require('tape');

test('count array object length from keydupl', function(t) {
	t.plan(1)

	var n = Object.keys(keydupl(['a', 'b'])).length;
	t.equal(n, 2);
});

