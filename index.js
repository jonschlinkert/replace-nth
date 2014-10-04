/**
 * replace-nth <https://github.com/assemble/replace-nth>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function nth(options) {
  var opts = options || {};

  var pattern = opts.pattern;
  var replacement = opts.replacement;
  var str = opts.str;
  var num = opts.num;

  var i = 0;
  return str.replace(pattern, function (match) {
    i++;
    return new RegExp('^(?:' + num + ')$', 'g').test(i) ? replacement : match;
  });
};