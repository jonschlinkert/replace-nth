/**
 * match-nth <https://github.com/assemble/match-nth>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */
var _ = require('lodash');

module.exports = function(options) {
  options = options || {};

  var pattern = options.pattern;
  var replacement = options.replacement;
  var str = options.str;
  var num = options.num;

  var i = 0;
  return str.replace(pattern, function (match) {
    i++;
    return new RegExp('^' + num + '$').test(i) ? replacement : match;
  });
};