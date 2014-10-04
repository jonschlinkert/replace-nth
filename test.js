/**
 * replace-nth <https://github.com/assemble/replace-nth>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var should = require('should');
var replaceNth = require('./');


var opts = {
  pattern: /a/g,
  replacement: 'B',
  str: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
};

describe('replaceNth - single match', function () {
  describe('when a regex specifies a single match:', function () {
    it('should return that specific match only', function (done) {
      opts.num = '1'
      replaceNth(opts).should.equal('Baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      done();
    });
  });
  describe('multiple matches', function () {
    it('should replace each match', function (done) {
      opts.num = '1|3|5'
      replaceNth(opts).should.equal('BaBaBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      done();
    });
  });
  describe('when a regex specifies a single two-digit match:', function () {
    it('should return each match at the specified index', function (done) {
      opts.num = '21'
      replaceNth(opts).should.equal('aaaaaaaaaaaaaaaaaaaaBaaaaaaaaaaaaaaaaaaaa');
      done();
    });
    it('should return each match at the specified index', function (done) {
      opts.num = '11'
      replaceNth(opts).should.equal('aaaaaaaaaaBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      done();
    });
  });
  describe('when a regex specifies multiple numbers:', function () {
    it('should return matches for each', function (done) {
      opts.num = '[12]'
      replaceNth(opts).should.equal('BBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      done();
    });
    it('should return matches for each', function (done) {
      opts.num = '[123]'
      replaceNth(opts).should.equal('BBBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      done();
    });
    it('should return matches for each number in the brackets and outside', function (done) {
      opts.num = '[123]|15'
      replaceNth(opts).should.equal('BBBaaaaaaaaaaaBaaaaaaaaaaaaaaaaaaaaaaaaaa');
      done();
    });
  });

  describe('when a regex specifies two replacements:', function () {
    var opts = {
      pattern: /a/g,
      replacement: 'BB',
      str: 'aaaaaaaaaaaaaaa'
    };
    it('should replace each match', function (done) {
      opts.num = '1'
      replaceNth(opts).should.equal('BBaaaaaaaaaaaaaa');
      opts.num = '[135]'
      replaceNth(opts).should.equal('BBaBBaBBaaaaaaaaaa');
      opts.num = '[196]'
      replaceNth(opts).should.equal('BBaaaaBBaaBBaaaaaa');
      done();
    });
  });

});