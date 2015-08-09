'use strict';

exports = module.exports = function(args) {
  if (!Array.isArray(args)) {
    var err = new Error('Argument must be in #array()');

    throw err.message;
  }

  var _obj = {};
  for (var i = 0; i < args.length; i++) {
    _obj[args[i]] = args[i];
  }

  return _obj;
};

